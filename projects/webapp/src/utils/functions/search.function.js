import { MeiliSearch } from 'meilisearch'

import { getProjectCrop, updateProject as apiUpdateProject } from './api.function'
import { PROJECT, REQUEST_CATEGORY } from '../enums'

export const SearchTrigger = {
  add: 'INSERT',
  update: 'UPDATE',
  delete: 'DELETE',
  projects: 'sync_projects_search',
  requests: 'sync_requests_search',
}

export const initMeiliSearch = async (_index = 'items') => {
  const client = new MeiliSearch({
    apiKey: process.env.MEILI_PK,
    host: process.env.MEILI_DOMAIN,
  })
  const index = await client.getIndex(_index)
  return { client, index }
}

export const addProject = async (data, res) => {
  await _upsertProject(data, 'add')
  res.status(200).json({ itemsId: data.new.id })
}

export const updateProject = async (data, res) => {
  await _upsertProject(data, 'update')
  res.status(200).json({ itemsId: data.new.id })
}

export const addRequest = async (data, res) => {
  await _syncProject(data)
  res.status(200).json({ itemsId: data.new.id })
}

export const updateRequest = async (data, res) => {
  await _syncProject(data)
  res.status(200).json({ itemsId: data.new.id })
}

export const deleteDocument = async (data, res) => {
  const { index } = await initMeiliSearch()
  await index.deleteDocuments([data.old.id])
  if (data.old.project_id) {
    await _syncProject({ new: { project_id: data.old.project_id, updated_at: new Date().toISOString() } })
  }
  res.status(200).json({ itemsId: data.old.id })
}

const _upsertProject = async (data, action) => {
  if (data?.new && data.new?.visibility === PROJECT.visibility.public) {
    const { index } = await initMeiliSearch()
    const projectCrop = await getProjectCrop(data.new.id)
    const projectDocument = _parseProjectToDocument(projectCrop)
    if (action === 'add') {
      await _addProjectOrRequests(projectCrop, projectDocument, index)
    } else if (action === 'update') {
      await _updateProjectAndRequests(data, projectCrop, projectDocument, index)
    }
  } else if (
    data.old?.visibility === PROJECT.visibility.public &&
    data?.new?.visibility === PROJECT.visibility.private
  ) {
    const { index } = await initMeiliSearch()
    const projectCrop = await getProjectCrop(data.new.id)
    const requestIds = projectCrop.requests.map(request => request.id)
    index.deleteDocuments([...requestIds, data.new.id])
  }
}

const _syncProject = async data => {
  const projectCrop = await getProjectCrop(data.new.project_id)
  if (projectCrop && projectCrop.visibility === PROJECT.visibility.public) {
    await apiUpdateProject(projectCrop.id, { updated_at: data.new.updated_at })
  }
}

const _addProjectOrRequests = async (projectCrop, projectDocument, index) => {
  const requestDocuments = projectCrop.requests.map(request =>
    _parseRequestToDocument(request, projectCrop, projectCrop.updated_at)
  )
  if (requestDocuments.length > 0) {
    await index.addDocuments(requestDocuments)
  } else {
    await index.addDocuments([projectDocument])
  }
}

const _updateProjectAndRequests = async (data, projectCrop, projectDocument, index) => {
  const requestDocuments = projectCrop.requests.map(request =>
    _parseRequestToDocument(request, projectCrop, projectCrop.updated_at)
  )
  if (data.old?.visibility === PROJECT.visibility.private) {
    if (requestDocuments.length > 0) {
      await index.addDocuments(requestDocuments)
    } else {
      await index.addDocuments([projectDocument])
    }
  } else {
    if (requestDocuments.length > 0) {
      await index.updateDocuments(requestDocuments)
      await index.deleteDocuments([projectCrop.id])
    } else {
      await index.updateDocuments([projectDocument])
    }
  }
}

const _parseProjectToDocument = project => {
  return {
    pro_title: project?.title,
    pro_goal: project?.goal,
    pro_description: project?.description,
    pro_location_text: !project?.location?.remote ? project?.location?.searchTerm : '',
    pro_team: project?.team,
    pro_motto: project?.motto,
    pro_author: project?.user?.name,
    pro_period_flexible: project?.period?.flexible,
    pro_period_from: !project?.period?.flexible ? new Date(project.period.from).valueOf() : '',
    pro_period_to: !project?.period?.flexible ? new Date(project.period.to).valueOf() : '',
    pro_location_remote: project?.location?.remote,
    pro_location_geo: !project?.location?.remote ? project?.location?.data?.geo : {},
    updated_at: new Date(project.updated_at).valueOf(),
    req_type: REQUEST_CATEGORY.none,
    itemsId: project?.id,
    groupId: project?.id,
  }
}

const _parseRequestToDocument = (request, project, timestamp) => {
  const { updated_at, req_type, itemsId, groupId, ...projectDocument } = _parseProjectToDocument(project)
  return {
    req_title: request?.title,
    req_description: request?.description,
    ...projectDocument,
    updated_at: new Date(timestamp).valueOf(),
    req_type: request?.category,
    itemsId: request?.id,
    groupId: request?.project_id,
  }
}

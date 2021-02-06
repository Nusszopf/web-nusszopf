import MeiliSearch from 'meilisearch'
import { differenceInHours } from 'date-fns'

import { getProjectCrop, updateProject as apiUpdateProject } from './api.function'
import { PROJECT } from '../enums'

export const SearchTrigger = {
  add: 'INSERT',
  update: 'UPDATE',
  delete: 'DELETE',
  projects: 'sync_projects_search',
  requests: 'sync_requests_search',
}

const MIN_DIFF_HOURS = 1

export const initMeiliSearch = async (_index = 'items') => {
  const client = new MeiliSearch({
    apiKey: process.env.MEILI_PK,
    host: process.env.MEILI_DOMAIN,
  })
  const index = await client.getIndex(_index)
  return { client, index }
}

export const addProject = async (data, res) => {
  await upsertProject(data, 'add')
  res.status(200).json({ itemsId: data.new.id })
}

export const updateProject = async (data, res) => {
  await upsertProject(data, 'update')
  res.status(200).json({ itemsId: data.new.id })
}

export const updateRequest = async (data, res) => {
  const projectCrop = await getProjectCrop(data.new.project_id)
  if (projectCrop && projectCrop.visibility === PROJECT.visibility.public) {
    const { index } = await initMeiliSearch()
    const document = _parseRequestToDocument(data.new, projectCrop, data.new.updated_at)
    await index.updateDocuments([document])
    await _syncProjectWithRequest(data.new, projectCrop)
  }
  res.status(200).json({ itemsId: data.new.id })
}

export const deleteDocument = async (data, res) => {
  const { index } = await initMeiliSearch()
  await index.deleteDocuments([data.old.id])
  const projectCrop = await getProjectCrop(data.old.project_id)
  await _syncProjectWithRequest({ ...data.old, updated_at: new Date().toISOString() }, projectCrop)
  res.status(200).json({ itemsId: data.old.id })
}

const upsertProject = async (data, action) => {
  if (data?.new && data.new?.visibility === PROJECT.visibility.public) {
    const { index } = await initMeiliSearch()
    const projectCrop = await getProjectCrop(data.new.id)
    const projectDocument = _parseProjectToDocument(data.new, projectCrop)
    if (action === 'add') {
      const requestDocuments = projectCrop.requests.map(request =>
        _parseRequestToDocument(request, projectCrop, projectCrop.updated_at)
      )
      await index.addDocuments([projectDocument, ...requestDocuments])
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

const _syncProjectWithRequest = async (request, project) => {
  if (project && project.visibility === PROJECT.visibility.public) {
    const diff = differenceInHours(new Date(request.updated_at), new Date(project.updated_at))
    if (diff >= MIN_DIFF_HOURS) {
      await apiUpdateProject(project.id, { updated_at: request.updated_at })
    }
  }
}

const _updateProjectAndRequests = async (data, projectCrop, projectDocument, index) => {
  if (data.old?.visibility === PROJECT.visibility.private) {
    const requestDocuments = projectCrop.requests.map(request =>
      _parseRequestToDocument(request, projectCrop, projectCrop.updated_at)
    )
    await index.addDocuments([projectDocument, ...requestDocuments])
  } else if (data.old?.title !== data.new?.title || data.old?.goal !== data.new?.goal) {
    const requestDocuments = projectCrop.requests.map(request => ({
      itemsId: request?.id,
      pro_title: projectCrop.title,
      pro_goal: projectCrop.goal,
      updated_at: new Date(projectCrop.updated_at).valueOf(),
    }))
    await index.updateDocuments([projectDocument, ...requestDocuments])
  } else {
    const requestDocuments = projectCrop.requests.map(request => ({
      itemsId: request?.id,
      updated_at: new Date(projectCrop.updated_at).valueOf(),
    }))
    await index.updateDocuments([projectDocument, ...requestDocuments])
  }
}

const _parseRequestToDocument = (request, project, timestamp) => {
  return {
    req_title: request?.title,
    req_description: request?.description,
    req_type: request?.category,
    pro_title: project?.title,
    pro_goal: project?.goal,
    updated_at: new Date(timestamp).valueOf(),
    type: 'request',
    itemsId: request?.id,
    groupId: request?.project_id,
  }
}

const _parseProjectToDocument = (project, projectCrop) => {
  return {
    pro_title: project?.title,
    pro_goal: project?.goal,
    pro_description: project?.description,
    pro_location_text: !project?.location?.remote ? project?.location?.searchTerm : '',
    pro_team: project?.team,
    pro_motto: project?.motto,
    pro_author: projectCrop?.user?.name,
    pro_period_flexible: project?.period?.flexible,
    pro_period_from: !project?.period?.flexible ? new Date(project.period.from).valueOf() : '',
    pro_period_to: !project?.period?.flexible ? new Date(project.period.to).valueOf() : '',
    pro_location_remote: project?.location?.remote,
    pro_location_geo: !project?.location?.remote ? project?.location?.data?.geo : {},
    updated_at: new Date(projectCrop.updated_at).valueOf(),
    type: 'project',
    itemsId: project?.id,
    groupId: project?.id,
  }
}

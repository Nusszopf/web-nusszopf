import MeiliSearch from 'meilisearch'
import { getProjectCrop } from './api.function'
import { PROJECT } from '../enums'

export const SearchTrigger = {
  add: 'INSERT',
  update: 'UPDATE',
  delete: 'DELETE',
  projects: 'sync_projects_search',
  requests: 'sync_requests_search',
}

export const addRequest = async (data, res) => {
  await upsertRequest(data, 'add')
  res.status(200).json({ itemsId: data.new.id })
}

export const updateRequest = async (data, res) => {
  await upsertRequest(data, 'update')
  res.status(200).json({ itemsId: data.new.id })
}

export const addProject = async (data, res) => {
  await upsertProject(data, 'add')
  res.status(200).json({ itemsId: data.new.id })
}

export const updateProject = async (data, res) => {
  await upsertProject(data, 'update')
  res.status(200).json({ itemsId: data.new.id })
}

export const deleteDocument = async (data, res) => {
  const { index } = await initMeiliSearch()
  await index.deleteDocument(data.old.id)
  res.status(200).json({})
}

const initMeiliSearch = async (_index = 'items') => {
  const client = new MeiliSearch({
    apiKey: process.env.MEILI_PK,
    host: process.env.MEILI_DOMAIN,
  })
  const index = await client.getIndex(_index)
  return { client, index }
}

const upsertRequest = async (data, action) => {
  const projectCrop = await getProjectCrop(data.new.project_id)
  if (projectCrop && projectCrop.visibility === PROJECT.visibility.public) {
    const { index } = await initMeiliSearch()
    const document = parseRequestToDocument(data?.new, projectCrop)
    if (action === 'add') {
      await index.addDocuments([document])
    } else if (action === 'update') {
      await index.updateDocuments([document])
    }
  }
}

const upsertProject = async (data, action) => {
  if (data?.new && data.new?.visibility === PROJECT.visibility.public) {
    const { index } = await initMeiliSearch()
    const projectCrop = await getProjectCrop(data.new.id)
    const document = parseProjectToDocument(data.new, projectCrop)
    if (action === 'add') {
      await index.addDocuments([document])
    } else if (action === 'update') {
      await index.updateDocuments([document])
      if (projectCrop?.requests?.length > 0) {
        if (data.old?.visibility === PROJECT.visibility.private) {
          const documents = projectCrop?.requests.map(request => parseRequestToDocument(request, projectCrop))
          await index.addDocuments(documents)
        } else if (data.old?.title !== data.new?.title || data.old?.goal !== data.new?.goal) {
          const documents = projectCrop?.requests.map(request => ({
            itemsId: request?.id,
            pro_title: projectCrop?.title,
            pro_goal: projectCrop?.goal,
          }))
          await index.updateDocuments(documents)
        }
      }
    }
  } else if (
    data.old?.visibility === PROJECT.visibility.public &&
    data?.new?.visibility === PROJECT.visibility.private
  ) {
    const { index } = await initMeiliSearch()
    const projectCrop = await getProjectCrop(data.new.id)
    const requestIds = projectCrop?.requests.map(request => request?.id)
    index.deleteDocuments([...requestIds, data.new.id])
  }
}

const parseRequestToDocument = (request, project) => {
  return {
    itemsId: request?.id,
    groupId: request?.project_id,
    type: 'request',
    pro_title: project?.title,
    pro_goal: project?.goal,
    req_type: request?.category,
    req_title: request?.title,
    req_description: request?.description,
    req_created_at: request?.created_at,
  }
}

const parseProjectToDocument = (project, projectCrop) => {
  return {
    itemsId: project?.id,
    groupId: project?.id,
    type: 'project',
    pro_title: project?.title,
    pro_goal: project?.goal,
    pro_created_at: project?.created_at,
    pro_description: project?.description,
    pro_team: project?.team,
    pro_motto: project?.motto,
    pro_user: project?.user?.name,
    pro_location_remote: project?.location?.remote,
    pro_location_geo: !project?.location?.remote ? project?.location?.data?.geo : {},
    pro_location_text: !project?.location?.remote ? project?.location?.searchTerm : '',
    pro_period_flexible: project?.period?.flexible,
    pro_period_from: !project?.period?.flexible ? project?.period?.from : '',
    pro_period_to: !project?.period?.flexible ? project?.period?.to : '',
    pro_author: projectCrop?.user?.name,
  }
}

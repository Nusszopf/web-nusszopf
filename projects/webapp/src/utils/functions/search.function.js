import MeiliSearch from 'meilisearch'
import { getProject } from './api.function'
import { PROJECT } from '../enums'

export const SearchTrigger = {
  add: 'INSERT',
  update: 'UPDATE',
  delete: 'DELETE',
}

const initMeiliSearch = async (_index = 'items') => {
  const client = new MeiliSearch({
    apiKey: process.env.MEILI_PK,
    host: process.env.MEILI_DOMAIN,
  })
  const index = await client.getIndex(_index)
  return { client, index }
}

export const addRequest = async (data, res) => {
  await upsertRequest(data, 'add')
  res.status(200).json({ itemsId: data.new.id })
}

export const updateRequest = async (data, res) => {
  await upsertRequest(data, 'update')
  res.status(200).json({ itemsId: data.new.id })
}

export const deleteRequest = async (data, res) => {
  const { index } = await initMeiliSearch()
  await index.deleteDocument(data.old.id)
  res.status(200).json({})
}

const upsertRequest = async (data, action) => {
  const project = await getProject(data.new.project_id)
  if (project && project.visibility === PROJECT.visibility.public) {
    const { index } = await initMeiliSearch()
    const documents = [
      {
        itemsId: data.new.id,
        groupId: data.new.project_id,
        type: 'request',
        pro_title: project.title,
        pro_goal: project.goal,
        req_title: data.new.title,
        req_description: data.new.description,
        req_created_at: data.new.created_at,
      },
    ]
    if (action === 'add') {
      await index.addDocuments(documents)
    } else if (action === 'update') {
      await index.updateDocuments(documents)
    }
  }
}

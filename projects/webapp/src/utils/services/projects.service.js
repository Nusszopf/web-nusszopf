import { useToasts } from 'ui-library/services/Toasts.service'
import apollo from './apollo.service'
import { Node } from 'slate'

import { useRichTextEditor } from 'ui-library/stories/organisms'
import { createProjectData as cmsCreate, editProjectsViewsData as cmsEdit } from '~/assets/data'
import { NZ_EMAIL } from '../enums'
import { parseDateISOString } from '../helper'

const useProjectsService = props => {
  const { notify } = useToasts()
  const { serializeText } = useRichTextEditor()
  const [apolloDeleteProject, { loading: deleteLoading }] = apollo.useDeleteProject()
  const [apolloUpdateProject, { loading: updateLoading }] = apollo.useUpdateProject()
  const [apolloAddProject, { loading: addLoading }] = apollo.useAddProject(props?.user?.data?.private?.id)

  const [apolloAddRequests, { loading: addRequestsLoading }] = apollo.useAddRequests(props?.user?.data?.private?.id)
  const [apolloAddRequest, { loading: addRequestLoading }] = apollo.useAddRequest(props?.project?.id)
  const [apolloUpdateRequest, { loading: updateRequestLoading }] = apollo.useUpdateRequest()
  const [apolloDeleteRequest, { loading: deleteRequestLoading }] = apollo.useDeleteRequest()

  const serializeRequest = (id, request) => {
    return {
      title: request.title,
      category: request.category,
      description: request.description
        .map(node => serializeText(node))
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim(),
      descriptionTemplate: request.description,
      project_id: id,
    }
  }

  const serializeProject = (user, form) => {
    return {
      ...serializeProjectDescription(user, form),
      ...serializeProjectSettings(user, form),
    }
  }

  const serializeProjectDescription = (user, form) => {
    return {
      title: form.title,
      goal: form.goal,
      descriptionTemplate: form.description,
      description: form.description
        .map(node => serializeText(node))
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim(),
      location: {
        remote: form.location.remote,
        searchTerm: form.location.remote ? '' : form.location.searchTerm,
        data: form.location.remote ? {} : form.location.data,
      },
      period: {
        flexible: form.period.flexible,
        from: form.period.flexible ? '' : parseDateISOString(form.period.from),
        to: form.period.flexible ? '' : parseDateISOString(form.period.to),
      },
      teamTemplate: form.team,
      team: form.team.map(n => Node.string(n)).join(' '),
      motto: form.motto,
      user_id: user.data.private.id,
    }
  }

  const serializeProjectSettings = (user, form) => {
    return {
      visibility: form.visibility,
      contact: form.contact ? user.data.private.email : NZ_EMAIL,
    }
  }

  const addProject = async (user, form) => {
    const project = serializeProject(user, form)
    notify({
      type: 'loading',
      message: cmsCreate.notify.project.loading,
    })
    try {
      const res = await apolloAddProject({ variables: { project } })
      if (form.requests.length > 0) {
        const requests = form.requests.map(request => serializeRequest(res.data.insert_projects_one.id, request))
        await apolloAddRequests({ variables: { requests } })
      }
      notify({
        type: 'success',
        message: cmsCreate.notify.project.success,
      })
      return true
    } catch (error) {
      notify({
        type: 'error',
        message: cmsCreate.notify.project.errors[0],
      })
      return false
    }
  }

  const updateProject = async (id, project) => {
    notify({
      type: 'loading',
      message: cmsEdit.notify.project.update.loading,
    })
    try {
      const { user_id, ...newProject } = project
      await apolloUpdateProject({
        variables: { id, project: newProject },
      })
      notify({
        type: 'success',
        message: cmsEdit.notify.project.update.success,
      })
    } catch (error) {
      notify({
        type: 'error',
        message: cmsEdit.notify.project.update.error,
      })
    }
  }

  const deleteProject = async id => {
    const hasConfirmed = confirm(cmsEdit.notify.project.delete.alert)
    if (hasConfirmed) {
      notify({
        type: 'loading',
        message: cmsEdit.notify.project.delete.loading,
      })
      try {
        await apolloDeleteProject({
          variables: { id },
          update: (cache, { data }) => {
            cache.evict({ id: `projects:${data.delete_projects_by_pk.id}` })
          },
        })
        notify({
          type: 'success',
          message: cmsEdit.notify.project.delete.success,
        })
        return true
      } catch (error) {
        notify({
          type: 'error',
          message: cmsEdit.notify.project.delete.error,
        })
        return false
      }
    } else {
      return false
    }
  }

  const addRequest = async (id, _request) => {
    notify({
      type: 'loading',
      message: cmsCreate.notify.request.loading,
    })
    try {
      const request = serializeRequest(id, _request)
      await apolloAddRequest({ variables: { request } })
      notify({
        type: 'success',
        message: cmsCreate.notify.request.success,
      })
      return true
    } catch (error) {
      notify({
        type: 'error',
        message: cmsCreate.notify.request.error,
      })
      return false
    }
  }

  const updateRequest = async _request => {
    notify({
      type: 'loading',
      message: cmsEdit.notify.request.update.loading,
    })
    try {
      const request = serializeRequest(_request.project_id, _request)
      const { project_id, ...newRequest } = request
      await apolloUpdateRequest({ variables: { id: _request.id, request: newRequest } })
      notify({
        type: 'success',
        message: cmsEdit.notify.request.update.success,
      })
      return true
    } catch (error) {
      notify({
        type: 'error',
        message: cmsEdit.notify.request.update.error,
      })
      return false
    }
  }

  const deleteRequest = async id => {
    const hasConfirmed = confirm(cmsEdit.notify.request.delete.alert)
    if (hasConfirmed) {
      notify({
        type: 'loading',
        message: cmsEdit.notify.request.delete.loading,
      })
      try {
        await apolloDeleteRequest({
          variables: { id },
          update: (cache, { data }) => {
            cache.evict({ id: `requests:${data.delete_requests_by_pk.id}` })
          },
        })
        notify({
          type: 'success',
          message: cmsEdit.notify.request.delete.success,
        })
        return true
      } catch (error) {
        notify({
          type: 'error',
          message: cmsEdit.notify.request.delete.error,
        })
        return false
      }
    } else {
      return false
    }
  }

  return {
    addProject,
    updateProject,
    deleteProject,
    deleteRequest,
    addRequest,
    updateRequest,
    addLoading,
    updateLoading,
    deleteLoading,
    addRequestsLoading,
    addRequestLoading,
    deleteRequestLoading,
    updateRequestLoading,
    serializeProjectSettings,
    serializeProjectDescription,
    serializeProject,
  }
}

export default useProjectsService

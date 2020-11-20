import { useToasts } from 'ui-library/services/Toasts.service'
import apollo from './apollo.service'

const useProjectsService = () => {
  const { notify } = useToasts()
  const [apolloDeleteProject] = apollo.useDeleteProject()

  const deleteProject = async id => {
    const hasConfirmed = confirm('Möchtest Du dein Projekt wirklich löschen?')
    if (hasConfirmed) {
      notify({
        type: 'loading',
        message: 'Dein Projekt wird gelöscht.',
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
          message: 'Dein Projekt wurde gelöscht.',
        })
        return true
      } catch (error) {
        notify({
          type: 'error',
          message: 'Sorry, da lief was schief...',
        })
        return false
      }
    } else {
      return false
    }
  }

  return { deleteProject }
}

export default useProjectsService

import { useRouter } from 'next/router'
const EditProject = () => {
  const router = useRouter()
  const { id } = router.query
  return <>EditProject works! {id}</>
}

export default EditProject

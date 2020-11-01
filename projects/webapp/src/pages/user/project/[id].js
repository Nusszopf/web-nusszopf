import { useRouter } from 'next/router'
const Project = () => {
  const router = useRouter()
  const { id } = router.query
  return <>Project works! {id}</>
}

export default Project

import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { PlusCircle } from 'react-feather'

import { getUser } from '~/utils/services/auth.service'
import { Text, Button } from 'ui-library/stories/atoms'
import { searchData as cms } from '~/assets/data'

const NoHitsSection = ({ className }) => {
  const router = useRouter()
  const user = getUser()

  const handleCreate = () => {
    if (user) {
      router.push('/user/project/create')
    } else {
      router.push('/api/login')
    }
  }

  return (
    <div className={classnames('max-w-3xl mx-auto break-normal', className)}>
      <div className="px-6 py-8 rounded-lg sm:px-8 lg:p-12 bg-livid-300 text-livid-800">
        <Text className="-mt-1.5">{cms.empty.title}</Text>
        <Text variant="textSm" className="mt-3 hyphens-auto">
          {cms.empty.description}
        </Text>
        <div className="mt-6 text-center lg:mt-8">
          <Button
            onClick={handleCreate}
            size="large"
            className="bg-lilac-200"
            color="lilac"
            iconLeft={<PlusCircle className="hidden mr-2 -ml-1 sm:inline-block" />}>
            {cms.empty.action}
          </Button>
        </div>
      </div>
    </div>
  )
}

NoHitsSection.propTypes = {
  className: PropTypes.string,
}

export default NoHitsSection

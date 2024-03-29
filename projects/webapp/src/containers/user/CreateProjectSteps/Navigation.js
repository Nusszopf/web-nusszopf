import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Button } from 'ui-library/stories/atoms'
import { createProjectData as cms } from '~/assets/data'

const Navigation = ({ stepper, formik, loading, className, ...props }) => (
  <div className={classnames('flex-shrink-0', className)} {...props}>
    {stepper?.step > 0 && (
      <Button data-test="btn_go-back_navigation" color="lilac" className="inline-block mr-5" onClick={stepper?.goBack}>
        {cms.navigation.back}
      </Button>
    )}
    <Button
      data-test="btn_create-or-next_navigation"
      disabled={loading}
      size="large"
      color="lilac"
      className="bg-lilac-200"
      onClick={formik.submitForm}>
      {stepper?.progress === 100 ? cms.navigation.create : cms.navigation.next}
    </Button>
  </div>
)

Navigation.propTypes = {
  className: PropTypes.string,
  stepper: PropTypes.object,
  formik: PropTypes.object,
  loading: PropTypes.bool,
}

export default Navigation

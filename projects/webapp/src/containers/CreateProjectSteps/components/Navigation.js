import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Button } from 'ui-library/stories/atoms'
import { createProjectData as content } from '../../../assets/data'

const Navigation = ({ stepper, formik, loading, className, ...props }) => (
  <div className={classnames('flex-shrink-0', className)} {...props}>
    {stepper?.step > 0 && (
      <Button variant="outline" color="lilac800" className="mr-5" onClick={stepper?.goBack}>
        {content.navigation.back}
      </Button>
    )}
    <Button disabled={loading} variant="outline" color="lilac800" onClick={formik.submitForm}>
      {stepper?.progress === 100 ? content.navigation.create : content.navigation.next}
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

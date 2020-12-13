import PropTypes from 'prop-types'
import { string } from 'yup'

import { Text, Select } from 'ui-library/stories/atoms'
import { FieldTitle } from '~/components'
import { REQUEST_CATEGORY } from '~/utils/enums'
import { requestFormData as cms } from '~/assets/data'

export const CategoryFieldValidationSchema = string().required('required error')

const CategoryField = ({ formik, ...props }) => {
  const mapCategoryToColor = category => {
    switch (category) {
      case REQUEST_CATEGORY.companions:
        return 'bg-red-200'
      case REQUEST_CATEGORY.rooms:
        return 'bg-yellow-200'
      case REQUEST_CATEGORY.materials:
        return 'bg-turquoise-200'
      case REQUEST_CATEGORY.financials:
        return 'bg-blue-200'
      case REQUEST_CATEGORY.others:
        return 'bg-pink-200'
      default:
        return 'bg-stone-400'
    }
  }

  return (
    <>
      <FieldTitle info={cms.category.info} {...props}>
        {cms.category.title}
      </FieldTitle>
      <Select
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={mapCategoryToColor(formik.values.category)}
        color="stone">
        <option value="">{cms.category.options.placeholder}</option>
        <option value="companions">{cms.category.options.companions}</option>
        <option value="rooms">{cms.category.options.rooms}</option>
        <option value="materials">{cms.category.options.materials}</option>
        <option value="financials">{cms.category.options.financials}</option>
        <option value="others">{cms.category.options.others}</option>
      </Select>
      {formik?.errors?.category && formik.touched?.category && (
        <Text variant="textXs" className="mt-2 ml-4 italic text-warning-700">
          {formik.errors.category}
        </Text>
      )}
    </>
  )
}

CategoryField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default CategoryField

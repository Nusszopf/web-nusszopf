import PropTypes from 'prop-types'
import { string } from 'yup'
import { Text, Select } from 'ui-library/stories/atoms'
import { FieldTitle } from '~/components'

export const CategoryFieldValidationSchema = string().required('required error')

const CategoryField = ({ formik, ...props }) => {
  const mapCategoryToColor = category => {
    switch (category) {
      case 'companions':
        return 'bg-red-200'
      case 'rooms':
        return 'bg-yellow-200'
      case 'materials':
        return 'bg-turquoise-200'
      case 'financials':
        return 'bg-blue-200'
      case 'others':
        return 'bg-pink-200'
      default:
        return 'bg-stone-400'
    }
  }

  return (
    <>
      <FieldTitle info="info" {...props}>
        Kategorie*
      </FieldTitle>
      <Select
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={mapCategoryToColor(formik.values.category)}
        color="stone">
        <option value="">Kategorie</option>
        <option value="companions">Mitstreiter:innen</option>
        <option value="rooms">Räume</option>
        <option value="materials">Materialien</option>
        <option value="financials">Finanzielle Ressourcen</option>
        <option value="others">Sonstiges</option>
      </Select>
      {formik?.errors?.category && formik.touched?.category && (
        <Text variant="textXs" className="mt-2 ml-4 italic">
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

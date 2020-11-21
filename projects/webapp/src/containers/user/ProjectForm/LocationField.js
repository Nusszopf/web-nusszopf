import { useState } from 'react'
import PropTypes from 'prop-types'
import { object, string } from 'yup'
import { isEmpty } from 'lodash'

import { Text, Switch } from 'ui-library/stories/atoms'
import { Combobox } from 'ui-library/stories/molecules'
import { findLocations } from '~/utils/services/location.service'
import { createProjectData as data } from '~/assets/data'
import { FieldTitle } from '~/components'

export const LocationFieldValidationSchema = object().shape({
  searchTerm: string().when(['remote'], {
    is: false,
    then: string().required(data.descriptionStep1.location.error[0]),
  }),
  data: object().when(['remote', 'searchTerm'], {
    is: (remote, searchTerm) => !remote && !isEmpty(searchTerm),
    then: object().test('location_data_geodata', data.descriptionStep1.location.error[1], data => !isEmpty(data)),
  }),
})

const LocationField = ({ formik, ...props }) => {
  const [locations, setLocations] = useState([])

  const handleLocationSelect = location => {
    const { value, ...data } = location
    formik.setFieldValue('location.searchTerm', value)
    formik.setFieldValue('location.data', data)
  }

  const handleSearchTermChange = async event => {
    const searchTerm = event?.target?.value
    formik.setFieldValue('location.searchTerm', searchTerm)
    search(searchTerm)
  }

  const search = async searchTerm => {
    let newLocations = locations
    if (searchTerm) {
      newLocations = await findLocations(searchTerm, locations)
      setLocations(newLocations)
    }
  }

  const handleSearchTermClear = () => {
    formik.setFieldValue('location.searchTerm', '')
    formik.setFieldValue('location.data', {})
    setLocations([])
  }

  return (
    <>
      <FieldTitle info={data.descriptionStep1.location.info} {...props}>
        {data.descriptionStep1.location.title}
      </FieldTitle>
      <Switch
        color="lilac800"
        name="location.remote"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        label={data.descriptionStep1.location.action}
        checked={formik.values.location.remote}
      />
      {!formik.values.location.remote && (
        <>
          <Combobox
            id="postalcode"
            tabIndex="0"
            name="location.searchTerm"
            className="mt-4"
            aria="Suche nach einem Ort"
            placeholder="Ort"
            onChange={handleSearchTermChange}
            onBlur={formik.handleBlur}
            onSelect={handleLocationSelect}
            onClear={handleSearchTermClear}
            value={formik.values.location.searchTerm}
            options={locations}
          />
          {formik?.errors?.location?.searchTerm && formik.touched?.location?.searchTerm && (
            <Text variant="textXs" className="mt-2 ml-4 italic">
              {formik.errors.location?.searchTerm}
            </Text>
          )}
          {formik?.errors?.location?.data && formik.touched?.location?.searchTerm && (
            <Text variant="textXs" className="mt-2 ml-4 italic">
              {formik.errors.location?.data}
            </Text>
          )}
        </>
      )}
    </>
  )
}

LocationField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default LocationField

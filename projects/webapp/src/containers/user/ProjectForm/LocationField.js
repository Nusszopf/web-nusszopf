import { useState } from 'react'
import PropTypes from 'prop-types'
import { object, string } from 'yup'
import { isEmpty } from 'lodash'

import { Text, Switch } from 'ui-library/stories/atoms'
import { Combobox } from 'ui-library/stories/organisms'
import { findLocations } from '~/utils/services/location.service'
import { FieldTitle } from '~/components'
import { projectFormData as cms } from '~/assets/data'

export const LocationFieldValidationSchema = object().shape({
  searchTerm: string().when(['remote'], {
    is: false,
    then: string().required(cms.location.error[0]),
  }),
  data: object().when(['remote', 'searchTerm'], {
    is: (remote, searchTerm) => !remote && !isEmpty(searchTerm),
    then: object().test('location_data_geodata', cms.location.error[1], data => !isEmpty(data)),
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
    const searchTerm = event.target.value
    formik.setFieldValue('location.searchTerm', searchTerm)
    await search(searchTerm)
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
      <FieldTitle info={cms.location.info} {...props}>
        {cms.location.title}
      </FieldTitle>
      <Switch
        aria-label={cms.location.title}
        color="lilac"
        name="location.remote"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        label={cms.location.action}
        checked={formik.values.location.remote}
      />
      {!formik.values.location.remote && (
        <>
          <Combobox
            id="postalcode"
            tabIndex="0"
            name="location.searchTerm"
            className="mt-4"
            aria={cms.location.title}
            placeholder={cms.location.placeholder}
            onChange={handleSearchTermChange}
            onBlur={formik.handleBlur}
            onSelect={handleLocationSelect}
            onClear={handleSearchTermClear}
            value={formik.values.location.searchTerm}
            options={locations}
          />
          {formik.errors?.location?.searchTerm && formik.touched?.location?.searchTerm && (
            <Text variant="textXs" className="mt-2 ml-4 italic text-warning-700">
              {formik.errors.location.searchTerm}
            </Text>
          )}
          {formik.errors?.location?.data && formik.touched?.location?.searchTerm && (
            <Text variant="textXs" className="mt-2 ml-4 italic text-warning-700">
              {formik.errors.location.data}
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

import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { object, string } from 'yup'
import { isEmpty } from 'lodash'
import { useRadioState, RadioGroup } from 'reakit/Radio'

import { Text, Radiobox } from 'ui-library/stories/atoms'
import { Combobox } from 'ui-library/stories/organisms'
import { findLocations } from '~/utils/services/location.service'
import { useDebounce } from '~/utils/hooks'
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
  const radio = useRadioState({ state: formik.values.location.remote, orientation: 'vertical' })
  const [locations, setLocations] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    search()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm])

  const handleLocationSelect = location => {
    const { value, ...data } = location
    formik.setFieldValue('location.searchTerm', value)
    formik.setFieldValue('location.data', data)
  }

  const handleSearchTermChange = async event => {
    const _searchTerm = event.target.value
    formik.setFieldValue('location.searchTerm', _searchTerm)
    formik.setFieldValue('location.data', {})
    setSearchTerm(_searchTerm)
  }

  const handleSearchTermClear = () => {
    formik.setFieldValue('location.searchTerm', '')
    formik.setFieldValue('location.data', {})
    setLocations([])
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  const search = async () => {
    let newLocations = locations
    if (searchTerm) {
      newLocations = await findLocations(searchTerm, locations)
      setLocations(newLocations)
    }
  }

  return (
    <>
      <FieldTitle info={cms.location.info} {...props}>
        {cms.location.title}
      </FieldTitle>
      <RadioGroup {...radio} aria-label={cms.visibility.title}>
        <Radiobox
          {...radio}
          name="location.remote"
          value={true}
          onChange={() => formik.setFieldValue('location.remote', true)}
          label={<Text variant="textSmMedium">{cms.location.radio1}</Text>}
        />
        <Radiobox
          {...radio}
          name="location.remote"
          value={false}
          onChange={() => formik.setFieldValue('location.remote', false)}
          className="mt-4"
          label={
            <>
              <Text variant="textSmMedium">{cms.location.radio2[0]}</Text>
              <Text variant="textSm" className={classnames({ 'opacity-50': formik.values.location.remote })}>
                {cms.location.radio2[1]}
              </Text>
            </>
          }
        />
      </RadioGroup>
      <div className="mt-2 ml-8">
        <Combobox
          id="postalcode"
          onKeyPress={handleKeyPress}
          tabIndex="0"
          name="location.searchTerm"
          aria={cms.location.title}
          placeholder={cms.location.placeholder}
          onChange={handleSearchTermChange}
          onBlur={formik.handleBlur}
          onSelect={handleLocationSelect}
          onClear={handleSearchTermClear}
          value={formik.values.location.searchTerm}
          options={locations}
          disabled={formik.values.location.remote}
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
      </div>
    </>
  )
}

LocationField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default LocationField

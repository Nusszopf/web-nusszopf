import { useState } from 'react'
import { useFormikContext } from 'formik'
import { mixed, object, string } from 'yup'
import { isEmpty } from 'lodash'
import { isMatch, compareDesc } from 'date-fns'

import { Text, Input, Switch } from 'ui-library/stories/atoms'
import { Combobox } from 'ui-library/stories/molecules'
import { RichTextEditor } from 'ui-library/stories/organisims'
import { FramedGridCard } from 'ui-library/stories/templates'
import { findLocations } from '~/utils/services/location.service'
import { parseDate, useScrollTop } from '~/utils/helper'
import { createProjectData as data } from '~/assets/data'
import { FieldTitle } from './components'

export const step1ValidationSchema = object({
  title: string().max(30, data.descriptionStep1.title.error[0]).required(data.descriptionStep1.title.error[1]),
  goal: string().max(150, data.descriptionStep1.goal.error[0]).required(data.descriptionStep1.goal.error[1]),
  description: mixed()
    .test('description_max', data.descriptionStep1.project.error[0], value =>
      JSON.stringify(value)?.length > 6000 ? false : true
    )
    .test('description_required', data.descriptionStep1.project.error[1], value => {
      if (value?.length <= 1) {
        if (value[0].children?.length <= 1) {
          const child = value[0].children[0]
          if (Object.prototype.hasOwnProperty.call(child, 'text')) {
            return child.text?.length > 0 ? true : false
          }
        }
      }
      return true
    }),
  location: object().shape({
    searchTerm: string().when(['remote'], {
      is: false,
      then: string().required(data.descriptionStep1.location.error[0]),
    }),
    data: object().when(['remote', 'searchTerm'], {
      is: (remote, searchTerm) => !remote && !isEmpty(searchTerm),
      then: object().test('location_data_geodata', data.descriptionStep1.location.error[1], data => !isEmpty(data)),
    }),
  }),
  period: object().shape({
    from: string().when(['flexible'], {
      is: false,
      then: string()
        .required(data.descriptionStep1.period.error[0])
        .test('period_from_required', data.descriptionStep1.period.error[1], date => isMatch(date, 'dd.MM.yyyy')),
    }),
    to: string()
      .when(['flexible'], {
        is: false,
        then: string()
          .required(data.descriptionStep1.period.error[2])
          .test('period_to_required', data.descriptionStep1.period.error[1], date => isMatch(date, 'dd.MM.yyyy')),
      })
      .when(['from'], (from, schema) => {
        return schema.test('period_to_isDesc', data.descriptionStep1.period.error[3], to => {
          if (!isMatch(from, 'dd.MM.yyyy') || !isMatch(to, 'dd.MM.yyyy')) {
            return true
          }
          const startDate = parseDate(from)
          const endDate = parseDate(to)
          const isDesc = compareDesc(startDate, endDate)
          return isDesc >= 0
        })
      }),
  }),
})

const DescriptionStep1 = () => {
  useScrollTop()
  const formik = useFormikContext()
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
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        <>
          <FieldTitle info={data.descriptionStep1.title.info}>{data.descriptionStep1.title.title}</FieldTitle>
          <Input
            name="title"
            maxLength={30}
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={data.descriptionStep1.title.placeholder}
            color="whiteLilac800"
          />
          {formik?.errors?.title && formik.touched?.title && (
            <Text variant="textXs" className="mt-2 ml-4 italic">
              {formik.errors.title}
            </Text>
          )}
        </>
        <>
          <FieldTitle info={data.descriptionStep1.goal.info} className="mt-8">
            {data.descriptionStep1.goal.title}
          </FieldTitle>
          <Input
            as="textarea"
            name="goal"
            maxLength={150}
            value={formik.values.goal}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            color="whiteLilac800"
            placeholder={data.descriptionStep1.goal.placeholder}
          />
          {formik?.errors?.goal && formik.touched?.goal && (
            <Text variant="textXs" className="mt-2 ml-4 italic">
              {formik.errors.goal}
            </Text>
          )}
        </>
        <>
          <FieldTitle info={data.descriptionStep1.project.info} className="mt-8">
            {data.descriptionStep1.project.title}
          </FieldTitle>
          <RichTextEditor
            name="description"
            onChange={value => formik.setFieldValue('description', value)}
            onBlur={() => formik.setFieldTouched('description')}
            initialState={formik.values.description}
            placeholder={data.descriptionStep1.project.placeholder}
          />
          {formik?.errors?.description && formik.touched?.description && (
            <Text variant="textXs" className="mt-2 ml-4 italic">
              {formik.errors.description}
            </Text>
          )}
        </>
      </FramedGridCard.Body.Col>
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
        <>
          <FieldTitle info={data.descriptionStep1.location.info}>{data.descriptionStep1.location.title}</FieldTitle>
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
        <>
          <FieldTitle className="mt-8" info={data.descriptionStep1.period.info}>
            {data.descriptionStep1.period.title}
          </FieldTitle>
          <Switch
            color="lilac800"
            name="period.flexible"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            label={data.descriptionStep1.period.action.switch}
            checked={formik.values.period.flexible}
          />
          {!formik.values.period.flexible && (
            <div className="mt-4 space-y-4">
              <div className="flex">
                <Text variant="textXs" className="w-12 mt-3 uppercase">
                  {data.descriptionStep1.period.action.from}
                </Text>
                <div className="w-full">
                  <Input
                    name="period.from"
                    value={formik.values.period.from}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    maxLength={10}
                    color="whiteLilac800"
                    placeholder={data.descriptionStep1.period.action.placeholder}
                    type="text"
                  />
                  {formik?.errors?.period?.from && formik.touched?.period?.from && (
                    <Text variant="textXs" className="mt-2 ml-4 italic">
                      {formik.errors.period?.from}
                    </Text>
                  )}
                </div>
              </div>
              <div className="flex">
                <Text variant="textXs" className="w-12 mt-3 uppercase">
                  {data.descriptionStep1.period.action.to}
                </Text>
                <div className="w-full">
                  <Input
                    name="period.to"
                    value={formik.values.period.to}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    maxLength={10}
                    color="whiteLilac800"
                    placeholder={data.descriptionStep1.period.action.placeholder}
                    type="text"
                  />
                  {formik?.errors?.period?.to && formik.touched?.period?.to && (
                    <Text variant="textXs" className="mt-2 ml-4 italic">
                      {formik.errors.period?.to}
                    </Text>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      </FramedGridCard.Body.Col>
    </>
  )
}

export default DescriptionStep1

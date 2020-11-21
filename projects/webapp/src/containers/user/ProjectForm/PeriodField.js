import PropTypes from 'prop-types'
import { object, string } from 'yup'
import { isMatch, compareDesc } from 'date-fns'

import { Text, Input, Switch } from 'ui-library/stories/atoms'
import { parseDate } from '~/utils/helper'
import { createProjectData as data } from '~/assets/data'
import { FieldTitle } from '~/components'

export const PeriodFieldValidationSchema = object().shape({
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
})

const PeriodField = ({ formik }) => (
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
)

PeriodField.propTypes = {
  formik: PropTypes.object.isRequired,
}

export default PeriodField

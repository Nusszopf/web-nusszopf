import PropTypes from 'prop-types'
import classnames from 'classnames'
import { object, string } from 'yup'
import { isMatch, compareDesc } from 'date-fns'
import { useRadioState, RadioGroup } from 'reakit/Radio'

import { Text, Input, Radiobox } from 'ui-library/stories/atoms'
import { parseDate } from '~/utils/helper'
import { FieldTitle } from '~/components'
import { projectFormData as cms } from '~/assets/data'

export const PeriodFieldValidationSchema = object().shape({
  from: string().when(['flexible'], {
    is: false,
    then: string()
      .required(cms.period.error[0])
      .test('period_from_required', cms.period.error[1], date => isMatch(date, 'dd.MM.yyyy')),
  }),
  to: string()
    .when(['flexible'], {
      is: false,
      then: string()
        .required(cms.period.error[2])
        .test('period_to_required', cms.period.error[1], date => isMatch(date, 'dd.MM.yyyy')),
    })
    .when(['from'], (from, schema) => {
      return schema.test('period_to_isDesc', cms.period.error[3], to => {
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

const PeriodField = ({ className, formik }) => {
  const radio = useRadioState({ state: formik.values.period.flexible, orientation: 'vertical' })
  return (
    <>
      <FieldTitle className={className} info={cms.period.info}>
        {cms.period.title}
      </FieldTitle>
      <RadioGroup {...radio} aria-label={cms.visibility.title}>
        <Radiobox
          data-test="radio_flexible_project-period"
          {...radio}
          name="period.flexible"
          value={true}
          onChange={() => formik.setFieldValue('period.flexible', true)}
          label={<Text variant="textSmMedium">{cms.period.action.radio1}</Text>}
        />
        <Radiobox
          data-test="radio_fixed_project-period"
          {...radio}
          name="period.flexible"
          value={false}
          onChange={() => formik.setFieldValue('period.flexible', false)}
          className="mt-4"
          label={<Text variant="textSmMedium">{cms.period.action.radio2}</Text>}
        />
      </RadioGroup>
      <div className="mt-4 space-y-4">
        <div className="flex">
          <Text
            variant="textXs"
            className={classnames('w-12 mt-3 uppercase', { 'opacity-50': formik.values.period.flexible })}>
            {cms.period.action.from}
          </Text>
          <div className="w-full lg:max-w-xs">
            <Input
              data-test="input_from_project-period"
              name="period.from"
              aria-label={cms.period.action.from}
              color="lilac"
              value={formik.values.period.from}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              maxLength={10}
              placeholder={cms.period.action.placeholder}
              type="text"
              disabled={formik.values.period.flexible}
            />
            {formik.errors?.period?.from && formik.touched?.period?.from && (
              <Text variant="textXs" className="mt-2 ml-4 italic text-warning-700">
                {formik.errors.period.from}
              </Text>
            )}
          </div>
        </div>
        <div className="flex">
          <Text
            variant="textXs"
            className={classnames('w-12 mt-3 uppercase', { 'opacity-50': formik.values.period.flexible })}>
            {cms.period.action.to}
          </Text>
          <div className="w-full lg:max-w-xs">
            <Input
              data-test="input_to_project-period"
              name="period.to"
              aria-label={cms.period.action.to}
              color="lilac"
              value={formik.values.period.to}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              maxLength={10}
              placeholder={cms.period.action.placeholder}
              type="text"
              disabled={formik.values.period.flexible}
            />
            {formik.errors?.period?.to && formik.touched?.period?.to && (
              <Text variant="textXs" className="mt-2 ml-4 italic text-warning-700">
                {formik.errors.period.to}
              </Text>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

PeriodField.propTypes = {
  className: PropTypes.string,
  formik: PropTypes.object.isRequired,
}

export default PeriodField

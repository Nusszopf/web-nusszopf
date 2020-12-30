import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Field, Form, Formik } from 'formik'
import { usePopoverState, Popover, PopoverDisclosure } from 'reakit/Popover'
import { ChevronDown } from 'react-feather'

import { Checkbox } from 'ui-library/stories/atoms'

const FilterPopover = ({ className }) => {
  const popover = usePopoverState({ placement: 'bottom-start' })
  return (
    <div className={classnames('font-medium text-moss-800', className)}>
      <PopoverDisclosure {...popover} className="flex font-semibold focus:outline-none">
        Filter <ChevronDown size={20} strokeWidth={2.5} className="mt-1 ml-1" />
      </PopoverDisclosure>
      <Popover
        {...popover}
        aria-label="Info"
        tabIndex={0}
        className="z-10 w-64 px-4 py-2 -mt-1 text-sm font-medium border-2 rounded-md shadow-md bg-moss-400 border-moss-800 focus:outline-none">
        <Formik
          initialValues={{
            financials: true,
            rooms: true,
            companions: true,
            materials: true,
            others: true,
          }}
          onSubmit={() => {}}>
          {formikProps => (
            <Form>
              <div>
                <Field
                  as={Checkbox}
                  checked={formikProps.values.financials}
                  name="financials"
                  aria-label="Finanzielle Ressourcen"
                  label="Finanzielle Ressourcen"
                />
              </div>
              <div>
                <Field as={Checkbox} checked={formikProps.values.rooms} name="rooms" aria-label="Räume" label="Räume" />
              </div>
              <div>
                <Field
                  as={Checkbox}
                  checked={formikProps.values.companions}
                  name="companions"
                  aria-label="Mitstreiter:innen"
                  label="Mitstreiter:innen"
                />
              </div>
              <div>
                <Field
                  as={Checkbox}
                  checked={formikProps.values.materials}
                  name="materials"
                  aria-label="Materialien"
                  label="Materialien"
                />
              </div>
              <div>
                <Field
                  as={Checkbox}
                  checked={formikProps.values.others}
                  name="others"
                  aria-label="Sonstiges"
                  label="Sonstiges"
                />
              </div>
            </Form>
          )}
        </Formik>
      </Popover>
    </div>
  )
}

FilterPopover.propTypes = {
  className: PropTypes.string,
}

export default FilterPopover

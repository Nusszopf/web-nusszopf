import { useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { object } from 'yup'
import { X } from 'react-feather'
import { isEqual } from 'lodash'
import { Button } from 'ui-library/stories/atoms'
import { Dialog, emptyRichText } from 'ui-library/stories/organisms'
import {
  DescriptionField,
  DescriptionFieldValidationSchema,
  TitleField,
  TitleFieldValidationSchema,
  CategoryField,
  CategoryFieldValidationSchema,
} from '~/containers/user/RequestForm'
import { editRequestDialogData as cms } from '~/assets/data'

const EditRequestDialog = ({ isOpen, onDismiss, onCreate, onUpdate, initialValues }) => {
  const formikRef = useRef()
  const request = useMemo(
    () =>
      initialValues ?? {
        title: '',
        description: emptyRichText,
        category: '',
        created_at: new Date().toISOString('de-DE'),
      },
    [initialValues]
  )

  const handleSubmit = newValues => {
    if (isEqual(newValues, initialValues)) {
      onDismiss()
    } else if (initialValues) {
      onUpdate(newValues)
    } else {
      onCreate(newValues)
    }
  }

  const handleDismiss = () => {
    if (formikRef?.current?.dirty) {
      const isConfirmed = confirm(initialValues ? cms.confirmEdit : cms.confirmCreate)
      if (isConfirmed) {
        onDismiss()
      }
    } else {
      onDismiss()
    }
  }

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={undefined}
      className="relative text-stone-800 bg-stone-200"
      aria-label={cms.aria}>
      <Formik
        innerRef={formikRef}
        initialValues={request}
        validationSchema={object({
          title: TitleFieldValidationSchema,
          description: DescriptionFieldValidationSchema,
          category: CategoryFieldValidationSchema,
        })}
        enableReinitialize={true}
        onSubmit={handleSubmit}>
        {formik => (
          <Form>
            <Button className="absolute top-0 right-0 p-1 m-3" variant="clean" size="baseClean" onClick={handleDismiss}>
              <X />
            </Button>
            <TitleField formik={formik} />
            <CategoryField className="mt-6" formik={formik} />
            <DescriptionField className="mt-6" formik={formik} />
            <div className="flex justify-center mt-10 space-x-4">
              <Button className="bg-stone-400" color="stone" variant="outline" type="submit">
                {initialValues ? cms.save : cms.create}
              </Button>
              <Button color="stone" variant="outline" onClick={handleDismiss}>
                {cms.cancel}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Dialog>
  )
}

EditRequestDialog.propTypes = {
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
  onCreate: PropTypes.func,
  onUpdate: PropTypes.func,
  initialValues: PropTypes.object,
}

export default EditRequestDialog

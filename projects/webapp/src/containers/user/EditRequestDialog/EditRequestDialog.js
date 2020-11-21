import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { object } from 'yup'

import { Button } from 'ui-library/stories/atoms'
import { Dialog } from 'ui-library/stories/molecules'
import { emptyRichText } from 'ui-library/stories/organisims'
import {
  DescriptionField,
  DescriptionFieldValidationSchema,
  TitleField,
  TitleFieldValidationSchema,
  CategoryField,
  CategoryFieldValidationSchema,
} from '~/containers'

const EditRequestDialog = ({ isOpen, onDismiss, onCreate, onUpdate, initialValues }) => {
  const handleSubmit = values => {
    if (initialValues) {
      onUpdate(values)
    } else {
      onCreate(values)
    }
  }

  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss} className="bg-lilac-400">
      <Formik
        initialValues={
          initialValues ?? {
            title: '',
            description: emptyRichText,
            category: '',
          }
        }
        validationSchema={object({
          title: TitleFieldValidationSchema,
          description: DescriptionFieldValidationSchema,
          category: CategoryFieldValidationSchema,
        })}
        enableReinitialize={true}
        onSubmit={handleSubmit}>
        {formik => (
          <Form>
            <TitleField formik={formik} />
            <CategoryField className="mt-4" formik={formik} />
            <DescriptionField className="mt-4" formik={formik} />
            <div className="flex justify-center mt-6 space-x-4">
              <Button type="submit">{initialValues ? 'Speichern' : 'Erstellen'}</Button>
              <Button onClick={onDismiss}>Abbrechen</Button>
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

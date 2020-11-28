import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { object } from 'yup'
import { X } from 'react-feather'

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
} from '~/containers/user/RequestForm'

const EditRequestDialog = ({ isOpen, onDismiss, onCreate, onUpdate, initialValues }) => {
  const handleSubmit = values => {
    if (initialValues) {
      onUpdate(values)
    } else {
      onCreate(values)
    }
  }

  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss} className="text-stone-800 bg-stone-200">
      <Formik
        initialValues={
          initialValues ?? {
            title: '',
            description: emptyRichText,
            category: '',
            created_at: new Date().toISOString('de-DE'),
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
            <div className="h-6">
              <Button className="float-right" variant="clean" size="baseClean" onClick={onDismiss}>
                <X />
              </Button>
            </div>
            <TitleField formik={formik} />
            <CategoryField className="mt-4" formik={formik} />
            <DescriptionField className="mt-4" formik={formik} />
            <div className="flex justify-center mt-6 space-x-4">
              <Button className="bg-stone-400" color="stone" variant="outline" type="submit">
                {initialValues ? 'Speichern' : 'Erstellen'}
              </Button>
              <Button color="stone" variant="outline" onClick={onDismiss}>
                Abbrechen
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

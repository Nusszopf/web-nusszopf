import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { object } from 'yup'
import classnames from 'classnames'
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
import { CategoryColor } from './EditRequestDialog.theme'

const EditRequestDialog = ({ isOpen, onDismiss, onCreate, onUpdate, initialValues }) => {
  const handleSubmit = values => {
    if (initialValues) {
      onUpdate(values)
    } else {
      onCreate(values)
    }
  }

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onDismiss}
      className={classnames('text-livid-800', {
        'bg-livid-200': !initialValues,
        [`${CategoryColor[initialValues?.category]}`]: initialValues,
      })}>
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
              <Button color="livid800" variant="outline" type="submit">
                {initialValues ? 'Speichern' : 'Erstellen'}
              </Button>
              <Button color="livid800" variant="outline" onClick={onDismiss}>
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
import { Formik, Form, Field, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import { X } from 'react-feather'
import { object, string } from 'yup'

import { useToasts } from 'ui-library/services/Toasts.service'
import { Button, Text, Input } from 'ui-library/stories/atoms'
import { Dialog } from 'ui-library/stories/molecules'
import { FieldTitle } from '~/components'

const ContactDialog = ({ isOpen, onDismiss, onContact, project, ...props }) => {
  const { notify } = useToasts()
  const handleSubmit = async values => {
    notify({ type: 'loading', message: 'Nachricht wird versendet...' })
    try {
      const res = await fetch(`${process.env.DOMAIN}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: project.title,
          user: project.user_id,
          email: values.email,
          msg: values.msg,
        }),
      })
      if (res.ok) {
        notify({ type: 'success', message: 'Nachricht versendet!' })
        onDismiss()
      } else {
        notify({ type: 'error', message: 'Nachricht konnte nicht versendet werden' })
      }
    } catch (error) {
      notify({ type: 'error', message: 'Nachricht konnte nicht versendet werden' })
    }
  }

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onDismiss}
      className="text-lilac-800 bg-lilac-300"
      aria-label="Contact Dialog"
      {...props}>
      <div className="h-6">
        <Button className="float-right" variant="clean" size="baseClean" onClick={onDismiss}>
          <X />
        </Button>
      </div>
      <Text variant="textLg">{project.title}</Text>
      <Text variant="textSm">Deine Nachricht wird über den Nusszopf versendet. Mehr Erklärung...</Text>
      <Formik
        initialValues={{ email: '', msg: '' }}
        onSubmit={handleSubmit}
        validationSchema={object({
          email: string().email('Bitte gib eine valide E-Mail-Adresse ein').required('Bitte gib E-Mail-Adresse ein'),
          msg: string().max(2000, 'Maximal 2000 Zeichen').required('Bitte gib eine Nachricht ein'),
        })}>
        {formik => (
          <Form>
            <>
              <FieldTitle info="info" className="mt-6">
                Deine E-Mail-Adresse*
              </FieldTitle>
              <Field
                as={Input}
                name="email"
                type="email"
                maxLength={100}
                value={formik.values.title}
                placeholder="beispiel@mail.de"
                color="whiteLilac800"
              />
              <ErrorMessage name="email" variant="textSm" className="mt-2 ml-4 italic" component={Text} />
            </>
            <>
              <FieldTitle info="info" className="mt-6">
                Deine Nachricht*
              </FieldTitle>
              <Input
                as="textarea"
                color="whiteLilac800"
                className="min-h-48"
                name="msg"
                maxLength={2000}
                value={formik.values.msg}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Nachricht..."
              />
              <ErrorMessage name="msg" variant="textSm" className="mt-2 ml-4 italic" component={Text} />
            </>
            <div className="flex justify-center mt-12 mb-6 space-x-4">
              <Button type="submit" color="lilac800" variant="outline" onClick={onContact}>
                Senden
              </Button>
              <Button type="button" color="lilac800" variant="outline" onClick={onDismiss}>
                Abbrechen
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Dialog>
  )
}

ContactDialog.propTypes = {
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
  onContact: PropTypes.func,
  project: PropTypes.object,
}

export default ContactDialog

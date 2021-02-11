import { Formik, Form, Field, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import { X } from 'react-feather'
import { object, string } from 'yup'

import { useToasts } from 'ui-library/services/Toasts.service'
import { Button, Text, Input } from 'ui-library/stories/atoms'
import { Dialog } from 'ui-library/stories/organisms'
import { contactDialogData as cms } from '~/assets/data'
import { FieldTitle } from '~/components'

const ContactDialog = ({ isOpen, onDismiss, onContact, project, request, ...props }) => {
  const { notify } = useToasts()
  const handleSubmit = async values => {
    notify({ type: 'loading', message: cms.notify.loading })
    try {
      const res = await fetch(`${process.env.DOMAIN}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: project.title,
          user: project.user_id,
          email: values.email,
          msg: values.msg,
          request: request?.title ?? '',
        }),
      })
      if (res.ok) {
        notify({ type: 'success', message: cms.notify.success })
        onDismiss()
      } else {
        notify({ type: 'error', message: cms.notify.error })
      }
    } catch (error) {
      notify({ type: 'error', message: cms.notify.error })
    }
  }

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={undefined}
      className="relative text-lilac-800 bg-lilac-200"
      aria-label={cms.dialog.aria}
      {...props}>
      <Button className="absolute top-0 right-0 p-1 m-3" variant="clean" size="baseClean" onClick={onDismiss}>
        <X />
      </Button>
      <Text variant="textLg">{project.title}</Text>
      <Text variant="textSm">{cms.dialog.description}</Text>
      <Formik
        initialValues={{ email: '', msg: '' }}
        onSubmit={handleSubmit}
        validationSchema={object({
          email: string().email(cms.validation.email[0]).required(cms.validation.email[1]),
          msg: string().max(2000, cms.validation.msg[0]).required(cms.validation.msg[1]),
        })}>
        {formik => (
          <Form>
            <>
              <FieldTitle info={cms.fields.email.info} className="mt-6">
                {cms.fields.email.title}
              </FieldTitle>
              <Field
                as={Input}
                aria-label={cms.fields.email.title}
                name="email"
                color="lilac"
                type="email"
                maxLength={100}
                value={formik.values.title}
                placeholder={cms.fields.email.placeholder}
              />
              <ErrorMessage
                name="email"
                variant="textSm"
                className="mt-2 ml-4 italic text-warning-700 "
                component={Text}
              />
            </>
            <>
              <Text className="mt-6 mb-3">{cms.fields.msg.title}</Text>
              <Input
                as="textarea"
                aria-label={cms.fields.msg.title}
                className="min-h-48"
                color="lilac"
                name="msg"
                maxLength={2000}
                value={formik.values.msg}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={cms.fields.msg.placeholder}
              />
              <ErrorMessage
                name="msg"
                variant="textSm"
                className="mt-2 ml-4 italic text-warning-700"
                component={Text}
              />
            </>
            <div className="flex justify-center mt-12 space-x-4">
              <Button type="submit" className="bg-lilac-300" onClick={onContact}>
                {cms.actions.submit}
              </Button>
              <Button type="button" onClick={onDismiss}>
                {cms.actions.cancel}
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
  request: PropTypes.object,
}

export default ContactDialog

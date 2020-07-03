import { useState, createRef } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import ReCAPTCHA from 'react-google-recaptcha'
import { CSSTransition } from 'react-transition-group'

import { Heading, Text, Input, Button, Spinner } from '../../atoms'
import { AlertDialog } from '../../organisms'
import { logError } from '../../../utils/services/error.service'
import styles from './newsletter.module.scss'

const content = {
  title: 'Newsletter',
  subscribe: {
    submit: 'Anmelden',
    reset: 'Weitere E-Mail registrieren',
  },
  unsubscribe: {
    submit: 'Abmelden',
    reset: 'Weitere E-Mail-Adresse abmelden',
  },
}

const Newsletter = ({ apiUrl, type, text }) => {
  const recaptchaRef = createRef()
  const [recaptchaValid, setRecaptchaState] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setError] = useState(false)
  const [doesLeadExist, setLeadExist] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: values => {
      const errors = {}
      if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Die E-Mail-Adresse sollte folgendes Format haben: mail@beispiel.de'
      }
      return errors
    },
    onSubmit: () => {
      if (recaptchaValid) {
        createNewsletterContact()
      } else {
        recaptchaRef.current.execute()
      }
    },
  })

  const handleRecaptcha = () => {
    setRecaptchaState(true)
    createNewsletterContact()
  }

  const resetForm = () => {
    setLeadExist(false)
    formik.resetForm()
  }

  const createNewsletterContact = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formik.values.email }),
      })
      if (response.ok) {
        setLeadExist(response.status === 200)
      }
    } catch (error) {
      setError(true)
      logError(`newsletter: ${error.message}`)
    }
    setIsLoading(false)
  }

  return (
    <>
      <div className={type === 'subscribe' ? styles.newsletter : null}>
        {type === 'subscribe' && <Heading as="h3">{content.title}</Heading>}
        <CSSTransition
          in={!isLoading && !doesLeadExist}
          timeout={250}
          classNames="step"
          unmountOnExit>
          <div>
            <Text>{text.description}</Text>
            <form name="newsletter" onSubmit={formik.handleSubmit}>
              <div className={styles.form}>
                <div className={styles.input}>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="E-Mail"
                    aria="Subscribe email for newsletter"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <CSSTransition
                    in={formik.touched.email && !!formik.errors.email}
                    timeout={250}
                    classNames="step"
                    unmountOnExit>
                    <div className={styles.errorMessage}>{formik.errors.email}</div>
                  </CSSTransition>
                </div>
                <div>
                  <Button type="submit">{content[type].submit}</Button>
                </div>
              </div>
            </form>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!isLoading && doesLeadExist}
          appear={true}
          timeout={250}
          classNames="step"
          unmountOnExit>
          <div>
            <Text>{text.confirmation}</Text>
            <Button type="reset" onClick={resetForm}>
              {content[type].reset}
            </Button>
          </div>
        </CSSTransition>
        <CSSTransition in={isLoading} appear={true} timeout={250} classNames="step" unmountOnExit>
          {<Spinner className={styles.spinner} />}
        </CSSTransition>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.RECAPTCHA_KEY}
          size="invisible"
          badge="bottomright"
          hl="de"
          onChange={handleRecaptcha}
          onExpired={() => setRecaptchaState(false)}
          onErrored={() => setRecaptchaState(false)}
        />
      </div>
      <AlertDialog
        showDialog={hasError}
        onConfirm={() => setError(false)}
        title="Sorry! Es ist ein Fehler aufgetreten."
        description="Deine Anfrage konnte nicht bearbeitet werden. Bitte versuche es später erneut oder schreibe uns direkt unter mail@nusszopf.org. Danke für dein Verständnis."
      />
    </>
  )
}

Newsletter.propTypes = {
  apiUrl: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.shape({
    description: PropTypes.string,
    confirmation: PropTypes.string,
  }),
}

export default Newsletter

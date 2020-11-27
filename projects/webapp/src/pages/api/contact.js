import sgMail from '@sendgrid/mail'
import runMiddleware, { rateLimiter } from '../../utils/functions/runMiddleware.function'
import { getUser } from '../../utils/functions/api.function'
const ERROR_CONSTRAINT = 'constraint-violation'

export default async function contact(req, res) {
  try {
    await runMiddleware(req, res, rateLimiter)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const user = await getUser(req.body.user)
    const content = {
      to: user.email,
      from: { name: 'Nusszopf (noreply)', email: 'noreply@nusszopf.org' },
      templateId: process.env.SENDGRID_TEMPLATE_CONTACT,
      dynamicTemplateData: {
        project_title: req.body.title,
        contact_email: req.body.email,
        private_msg: req.body.msg,
      },
    }
    await sgMail.send(content)
    res.status(200).json({ project: req.body.title })
  } catch (error) {
    console.error(error)
    const status =
      error.response?.errors[0]?.extensions?.code === ERROR_CONSTRAINT || error.message?.includes('jwt')
        ? 400
        : error.status ?? 500
    res.status(status).end(error.message)
  }
}

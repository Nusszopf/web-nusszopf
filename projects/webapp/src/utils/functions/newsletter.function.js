import jwt from 'jsonwebtoken'
import { addLead, updateLead, getLead, deleteLead } from './api.function'

export const NewsletterType = {
  subscribe: 'subscribe',
  subscribeConfirm: 'subscribeConfirm',
  unsubscribe: 'unsubscribe',
  unsubscribeConfirm: 'unsubscribeConfirm',
  auth0SyncHasura: 'auth0SyncHasura',
}

export const handleSubscribe = async ({ email, name, privacy }, res, sgMail) => {
  const lead = await addLead(email, name, privacy)
  await sendSubscribeEmail(lead, sgMail)
  res.status(200).json({ email: lead?.email, name: lead?.name })
}

export const handleSubscribeConfirm = async ({ token }, res) => {
  const { leadId } = jwt.verify(token, process.env.EMAIL_SECRET)
  const lead = await updateLead(leadId)
  res.status(200).json({ email: lead?.email, name: lead?.name })
}

export const handleUnsubscribe = async ({ email }, res, sgMail) => {
  const lead = await getLead(email)
  if (lead) {
    await sendUnsubscribeEmail(lead, sgMail)
    res.status(200).json({ email: lead?.email, name: lead?.name })
  } else {
    res.status(404).end(`lead with email ${email} was not found`)
  }
}

export const handleUnsubscribeConfirm = async ({ token }, res) => {
  const { leadEmail } = jwt.verify(token, process.env.EMAIL_SECRET)
  await deleteLead(leadEmail)
  res.status(200).json({ email: leadEmail })
}

export const handleAuth0SyncHasura = async ({ token }, res) => {
  const { id, name, email } = jwt.verify(token, process.env.EMAIL_SECRET)
  const lead = await getLead(email)
  if (lead) {
    res.status(200).json({ id })
  } else {
    const lead = await addLead(email, name, true)
    await updateLead(lead.id)
    res.status(200).json({ id })
  }
}

export const createSendGridContact = (sgClient, listId, email, name) => {
  const reqContact = {
    method: 'PUT',
    url: '/v3/marketing/contacts',
    body: {
      list_ids: [listId],
      contacts: [{ email, first_name: name }],
    },
    json: true,
  }
  return sgClient.request(reqContact)
}

export const getSendGridContactId = async (sgClient, email, listId) => {
  const reqContact = {
    method: 'POST',
    url: '/v3/marketing/contacts/search',
    body: {
      query: `email LIKE '${email}' AND CONTAINS(list_ids, '${listId}')`,
    },
    json: true,
  }
  const [response, body] = await sgClient.request(reqContact)
  return body.result[0]?.id
}

export const deleteSendGridContact = (sgClient, leadId) => {
  const reqContact = {
    method: 'DELETE',
    url: `/v3/marketing/contacts?ids=${leadId}`,
    body: '{}',
  }
  return sgClient.request(reqContact)
}

const sendSubscribeEmail = (lead, sgMail) => {
  return new Promise((resolve, reject) =>
    jwt.sign({ leadId: lead.id }, process.env.EMAIL_SECRET, { expiresIn: '7d' }, async (err, emailToken) => {
      const content = {
        to: lead.email,
        from: { name: 'Nusszopf (noreply)', email: 'noreply@nusszopf.org' },
        templateId: process.env.SENDGRID_TEMPLATE_SUBSCRIBE_ID,
        dynamicTemplateData: {
          subscribe_url: `${process.env.DOMAIN}/newsletter/subscribe/${emailToken}`,
          username: lead.name,
        },
      }
      if (err) {
        reject(err)
      }
      try {
        await sgMail.send(content)
        resolve('success')
      } catch (error) {
        reject('error')
      }
    })
  )
}

const sendUnsubscribeEmail = (lead, sgMail) => {
  return new Promise((resolve, reject) =>
    jwt.sign(
      { leadId: lead.id, leadEmail: lead.email },
      process.env.EMAIL_SECRET,
      { expiresIn: '7d' },
      async (err, emailToken) => {
        const content = {
          to: lead.email,
          from: { name: 'Nusszopf (noreply)', email: 'noreply@nusszopf.org' },
          templateId: process.env.SENDGRID_TEMPLATE_UNSUBSCRIBE_ID,
          dynamicTemplateData: {
            unsubscribe_url: `${process.env.DOMAIN}/newsletter/unsubscribe/${emailToken}`,
            username: lead.name,
          },
        }
        if (err) {
          reject(err)
        }
        try {
          await sgMail.send(content)
          resolve('success')
        } catch (error) {
          reject('error')
        }
      }
    )
  )
}

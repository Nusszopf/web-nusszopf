import { getSendGridContactId, deleteSendGridContact, createSendGridContact } from './newsletter.function'

export const LeadsTrigger = {
  syncSendGrid: 'sync_leads_sendgrid',
}

export const handleConfirmation = async ({ email, name, hasConfirmed }, res, sgClient) => {
  if (hasConfirmed) {
    await createSendGridContact(sgClient, process.env.SENDGRID_LIST_ID, email, name)
  }
  res.status(200).json({ email })
}

export const handleDeleteLead = async ({ email }, res, sgClient) => {
  const contactId = await getSendGridContactId(sgClient, email, process.env.SENDGRID_LIST_ID)
  if (contactId) {
    await deleteSendGridContact(sgClient, contactId)
  }
  res.status(200).json({ email })
}

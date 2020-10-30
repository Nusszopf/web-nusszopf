import { getSendGridContactId, deleteSendGridContact } from './newsletter.function'
import { deleteLead } from './api.function'

export const AccountTrigger = {
  delete: 'clean_up_deleted_user',
  subscribeNewsletter: 'subscribeNewsletter',
  unsubscribeNewsletter: 'unsubscribeNewsletter',
}

// todo: delete projects / searchings / offers / ...
export const handleDelete = async ({ id, email }, res, sgClient) => {
  const contactId = await getSendGridContactId(sgClient, email, process.env.SENDGRID_LIST_ID)
  if (contactId) {
    await deleteSendGridContact(sgClient, contactId)
    await deleteLead(email)
  }
  res.status(200).json({ msg: `clean up deleted account (${id}) finished.` })
}

// check: event trigger for leads -> delete / insert
// check: req.body -> event type....

export const handleSubscribeNewsletter = async ({}, res, sgClient) => {
  // auth: user kann sich selbst zu leads hinzufügen
  res.status(200).json({})
}

export const handleUnsubscribeNewsletter = async ({}, res, sgClient) => {
  // auth: user kann sich selbst aus leads löschen
  res.status(200).json({})
}

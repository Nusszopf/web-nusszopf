import React from 'react'
import { Alert, ALERT_TYPES } from '../../molecules'

export default {
  title: 'Design System/Molecules/Alert',
  component: Alert,
}

export const Info = () => <Alert type={ALERT_TYPES.info} text="Info" />
export const Error = () => <Alert type={ALERT_TYPES.error} text="Error" />
export const Success = () => <Alert type={ALERT_TYPES.success} text="Success" />
export const Loading = () => <Alert type={ALERT_TYPES.loading} text="Loading" />

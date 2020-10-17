import React, { useState } from 'react'
import Toast from './Toast.molecule'
import { Button } from '../../atoms'
import { useToasts, ToastsProvider } from '../../../services/Toasts.service'
import { ToastType } from './Toast.molecule'

export default {
  title: 'Design System/Molecules/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component:
          '**UI molecule** based on [Reakit Clickable](https://reakit.io/docs/clickable/). A `Toast` will always be rendered inside of the `ToastPortal` based on [Reakit Portal](https://reakit.io/docs/portal/). The `ToastPortal` should be at the root level.',
      },
    },
  },
}

export const NotifyMe = () => {
  const NotifyButton = () => {
    const { notify } = useToasts()
    const [counter, setCounter] = useState(1)
    return (
      <Button
        onClick={() => {
          notify({ type: ToastType.info, message: `counter: ${counter}` })
          setCounter(counter => counter + 1)
        }}>
        click to notify me!
      </Button>
    )
  }

  return (
    <ToastsProvider>
      <NotifyButton />
    </ToastsProvider>
  )
}

export const Info = () => <Toast id={1} type={ToastType.info} message="info" onClose={console.log} />
export const Success = () => <Toast id={2} type={ToastType.success} message="success" onClose={console.log} />
export const Error = () => <Toast id={3} type={ToastType.error} message="error" onClose={console.log} />
export const Loading = () => <Toast id={4} type={ToastType.loading} message="loading" onClose={console.log} />

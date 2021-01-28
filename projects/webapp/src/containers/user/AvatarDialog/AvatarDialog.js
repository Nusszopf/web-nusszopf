import { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import apollo from '~/utils/services/apollo.service'
import { useToasts } from 'ui-library/services/Toasts.service'
import { Button } from 'ui-library/stories/atoms'
import { Dialog, Cropper } from 'ui-library/stories/organisms'
import { SPACES_CDN_ENDPOINT } from '~/utils/enums'
import { profileData as cms } from '~/assets/data'

const AvatarDialog = ({ isOpen, onDismiss, user, ...props }) => {
  const [isComplete, setIsComplete] = useState(false)
  const [updateUser] = apollo.useUpdateUser()
  const cropper = useRef()
  const { notify } = useToasts()

  const handleSubmit = async () => {
    notify({ type: 'loading', message: cms.picture.notify.loading })
    try {
      const image = await cropper.current.createImage()
      // get signed upload-url
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ id: user.data.private.id, picture: user.data.picture }),
      })
      const { url, fields, filename } = await res.json()
      const file = new File([image], filename, { type: 'image/jpeg' })
      // upload image to space
      const formData = new FormData()
      Object.entries({ ...fields, file }).forEach(([key, value]) => {
        formData.append(key, value)
      })
      await fetch(url, {
        method: 'POST',
        body: formData,
      })
      // update user data
      await updateUser({
        variables: { id: user.data.private.id, picture: SPACES_CDN_ENDPOINT + encodeURIComponent(filename) },
      })

      notify({ type: 'success', message: cms.picture.notify.success })
      onDismiss()
    } catch (error) {
      notify({ type: 'error', message: cms.picture.notify.error })
    }
  }

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onDismiss}
      className="relative text-steel-700 bg-steel-200"
      aria-label="{cms.dialog.aria}"
      {...props}>
      <div className="-mx-6 -mt-10 overflow-hidden sm:-mx-8 sm:rounded-t-md">
        <Cropper ref={cropper} onComplete={() => setIsComplete(true)} />
      </div>
      <div className="mt-5 space-x-5 text-center">
        <Button disabled={!isComplete} className="bg-steel-300" onClick={handleSubmit}>
          {cms.picture.actions.save}
        </Button>
        <Button onClick={onDismiss}>{cms.picture.actions.cancel}</Button>
      </div>
    </Dialog>
  )
}

AvatarDialog.propTypes = {
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
  user: PropTypes.object,
}

export default AvatarDialog

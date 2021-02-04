import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Portal as ReakitPortal } from 'reakit/Portal'
import { AnimatePresence, motion } from 'framer-motion'
import { Toast } from '../stories/molecules'

const AUTO_CLOSE_MS = 3000

const Toasts = createContext()

export const useToasts = () => useContext(Toasts)

export const ToastsProvider = ({ children, ...props }) => {
  const [toasts, setToasts] = useState([])

  const notify = note => {
    const toast = {
      type: note.type,
      message: note.message,
      id: new Date().getTime(),
    }
    setToasts(toasts => [...toasts, toast])
    setTimeout(() => close(toast.id), AUTO_CLOSE_MS)
  }

  const close = id => {
    setToasts(toasts => toasts.filter(toast => toast.id !== id))
  }

  return (
    <Toasts.Provider value={{ notify, close, toasts }} {...props}>
      {children}
      <ReakitPortal>
        {toasts.length > 0 && (
          <div className="fixed right-0 z-50 w-full p-3 top-10 lg:top-12 sm:w-auto">
            <AnimatePresence>
              {toasts.map((toast, index) => (
                <motion.div
                  key={toast.id}
                  initial={{ opacity: 0, y: 25, scale: 0.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -5 }}>
                  <Toast
                    className={classnames('mb-2', {
                      'opacity-50': toasts.length !== index + 1,
                    })}
                    id={toast.id}
                    type={toast.type}
                    message={toast.message}
                    onClose={close}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </ReakitPortal>
    </Toasts.Provider>
  )
}

ToastsProvider.propTypes = {
  children: PropTypes.node,
}

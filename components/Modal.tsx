import React, { ReactNode } from 'react'
import { CgCloseO } from 'react-icons/cg'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  if (!isOpen) return null

  return (
    <>
      {/* Blurred Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        role="dialog"
        aria-modal="true"
      >
        <div className="shadow-4xl relative mx-4 w-full max-w-6xl overflow-hidden rounded-xl bg-almond">
          {/* Header with Close Button */}
          <div className="flex justify-end p-2">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Close"
            >
              <CgCloseO size={'32px'} />
            </button>
          </div>
          {/* Scrollable Content */}
          <div
            className={`max-h-[80vh] overflow-y-auto p-6 ${className || ''}`}
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // Internet Explorer
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal

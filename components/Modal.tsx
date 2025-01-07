import React, { ReactNode, useEffect, useRef } from 'react'
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
  const modalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Close the modal if the user clicks outside of it
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    // Add the event listener for mouse clicks
    document.addEventListener('mousedown', handleOutsideClick)

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [onClose])

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
        <div
          ref={modalRef}
          className={`shadow-4xl relative mx-4 my-8 w-full max-w-6xl scale-90 transform overflow-hidden rounded-lg bg-almond opacity-0 shadow-lg transition-all duration-300 ease-out ${
            isOpen ? 'scale-100 opacity-100' : ''
          }`}
        >
          {/* Header with Close Button */}
          <div className="flex justify-end p-2">
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-white hover:text-[#A78BFA]"
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

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
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [onClose])

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        role="dialog"
        aria-modal="true"
      >
        <div
          ref={modalRef}
          className={`relative h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 shadow-lg transition-all duration-300 ease-out sm:mx-4 sm:my-8 sm:max-h-[80vh] sm:max-w-6xl sm:rounded-xl ${
            isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          } ${className || ''}`}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-50 border-2 border-transparent text-black transition-all duration-300 hover:rounded-full hover:border-[#fff] hover:bg-transparent"
          >
            <CgCloseO size={'32px'} color="#fff" />
          </button>

          <div
            className={`h-full overflow-y-auto p-6`}
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

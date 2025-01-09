import React, { ReactNode, useEffect, useRef, useState } from 'react'
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
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [hideCloseButton, setHideCloseButton] = useState(false)

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

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const isScrolled = contentRef.current.scrollTop > 0
        setHideCloseButton(isScrolled)
      }
    }

    const content = contentRef.current
    content?.addEventListener('scroll', handleScroll)

    return () => {
      content?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-lg"
        onClick={onClose}
      />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center pt-4"
        role="dialog"
        aria-modal="true"
        ref={modalRef}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className={`fixed right-8 top-8 z-50 text-black transition-all duration-300 hover:rounded-full hover:border-[#fff] hover:bg-transparent
            ${hideCloseButton ? 'pointer-events-none opacity-0' : ''}
            md:pointer-events-auto md:opacity-100`}
        >
          <CgCloseO size={'32px'} color="#fff" />
        </button>
        <div
          className="h-full w-full overflow-y-auto p-6"
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // Internet Explorer
          }}
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal

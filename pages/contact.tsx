import React from 'react'
import ContactForm from '../components/Form'
import MainLayout from '../layouts/MainLayout'

export default function Contact() {
  return (
    <MainLayout title="contact">
      <div className="w-full">
        <ContactForm />
      </div>
    </MainLayout>
  )
}

import React, { useState, useMemo, ChangeEvent, FormEvent } from 'react'

import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'

const encode = (data: Record<string, string>): string => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string>('')

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const handleResetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = { name, email, message }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      })
      setSubmitted(true)
      handleResetForm()
    } catch (error) {
      setSubmitError((error as Error).message)
    }
  }

  const isFormValid = useMemo(() => {
    return name !== '' && email !== '' && message !== ''
  }, [name, email, message])

  return (
    <div className="flex flex-col-reverse rounded-xl bg-[#fff]/40 shadow-lg dark:bg-slate-600 md:flex-row">
      <div className="relative flex-1">
        <div className="absolute -top-2 grid w-full place-items-center text-lg font-semibold">
          {submitError && (
            <div className="rounded bg-gray-200 p-3 text-terracota">
              Failed to submit form: {submitError}
            </div>
          )}
          {submitted && (
            <div className="rounded bg-gray-200 p-3 text-teal">
              Thanks for reaching out!
            </div>
          )}
        </div>
        <form
          className="mb-4 rounded p-6 pb-8 pt-12 sm:p-8"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label
              className="text-sm font-semibold sm:text-base"
              htmlFor="yourname"
            >
              Name
            </label>{' '}
            <br />
            <Input
              type="text"
              name="name"
              value={name}
              id="yourname"
              onChange={handleNameChange}
            />
          </p>
          <p>
            <label
              className="text-sm font-semibold sm:text-base"
              htmlFor="youremail"
            >
              Email
            </label>{' '}
            <br />
            <Input
              type="email"
              name="email"
              value={email}
              id="youremail"
              onChange={handleEmailChange}
            />
          </p>
          <p>
            <label
              className="text-sm font-semibold sm:text-base"
              htmlFor="yourmessage"
            >
              Message
            </label>{' '}
            <br />
            <TextArea
              name="message"
              value={message}
              id="yourmessage"
              onChange={handleMessageChange}
              className="h-56 dark:bg-slate-200"
            />
          </p>
          <div className="grid place-items-center">
            <Button className="w-full" type="submit" disabled={!isFormValid}>
              <span className="font-bold sm:text-lg">Submit</span>
            </Button>
          </div>
        </form>
      </div>

      <div className="grid flex-1 place-items-center py-4">
        <div className="flex flex-col gap-2">
          <h2 className="m-auto bg-brush px-8 text-xl font-semibold text-beige dark:bg-brush2 sm:text-3xl">
            Get in touch
          </h2>
          <div className="grid gap-2 p-4 text-sm font-semibold">
            <h3>email: elaineokumura@gmail.com</h3>
            <h3>phone: (+64) 027 548 7193</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

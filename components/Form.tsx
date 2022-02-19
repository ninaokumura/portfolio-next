import React, { useState, useMemo } from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleNameChange = (event: any) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value)
  }

  // const handleSubmit = (event: any) => {
  //   event.preventDefault()
  //   const formData = { name, email, message }
  //   console.log(formData)

  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({ 'form-name': 'contact', ...formData }),
  //   })
  //     .then(() => setSubmitted(true))
  //     .catch((error) => setSubmitError(error.message))
  // }

  // const isFormValid = useMemo(() => {
  //   if (name === '') {
  //     return false
  //   }
  //   if (email === '') {
  //     return false
  //   }
  //   if (message === '') {
  //     return false
  //   }
  //   return true
  // }, [name, email, message])

  return (
    <div className="grid grid-cols-2 shadow-lg">
      <form
        className="mb-4 rounded bg-beige px-8 pt-6 pb-8 "
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
      >
        <p>
          <label htmlFor="yourname">Name</label> <br />
          <Input
            type="text"
            name="name"
            value={name}
            id="yourname"
            onChange={handleNameChange}
          />
        </p>
        <p>
          <label htmlFor="youremail">Email</label> <br />
          <Input
            type="email"
            name="email"
            value={email}
            id="youremail"
            onChange={handleEmailChange}
          />
        </p>
        <p>
          <label htmlFor="yourmessage">Message</label> <br />
          <TextArea
            name="message"
            value={message}
            id="yourmessage"
            onChange={handleMessageChange}
            className="h-56"
          />
        </p>
        <p>
          <Button className="w-full" type="submit">
            Send
          </Button>
        </p>
      </form>

      <div className="grid place-items-center">
        <div className="flex flex-col gap-2 text-left">
          <h2 className="m-auto bg-brush px-8 py-1 text-3xl text-beige">
            Get in touch
          </h2>
          <h3 className="contact">email:elaineokumura@gmail.com</h3>
          <h3 className="contact">phone: (+64) 027 548 7193</h3>
          <Button>Download resume</Button>
        </div>
      </div>
    </div>
  )
}

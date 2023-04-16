import React, { useState } from 'react'
import {
  ContactContainer, 
  FormContainer, 
  Input,
  FormSubmit,
  FormTextArea,
} from './ContactStyles'; 

const Contact = () => {
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState(""); 

  const handleOnChange = (e) => {
    setEmail(e.target.value); 
    console.log(setEmail)
  }

  return (
    <>

    <ContactContainer>
      <FormContainer>
        <h2>Write Me</h2>
         <Input placeholder='Name' type='text' name='name'/>
         <Input placeholder='Last Name' type='text' name='lastName' />
         <Input placeholder='E-Mail' type='email' name='email' value={email} onChange={handleOnChange} />

         <FormTextArea placeholder='Your Message!'></FormTextArea>
         <FormSubmit>Submit</FormSubmit>
      </FormContainer>
    </ContactContainer>
    </>
  )
}

export default Contact
import React, { useState } from 'react'
import {
  ContactContainer, 
  FormContainer, 
  Input,
  FormSubmit,
  FormTextArea,
  ContactInfoContainer,
  PersonalInfoBox,
} from './ContactStyles'; 

const Contact = () => {
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState(""); 

  const emailValidation = () => {
    const regEx=/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if(regEx.test(email)) {
      setMessage('Email is Valid'); 
    } else if(!regEx.test(email) && email !== '') {
      setMessage('Email Is Not Valid'); 
    }else {
      setMessage(''); 
    }
  }; 

  const handleOnChange = (e) => {
    setEmail(e.target.value); 
    console.log(setEmail)
  }

  const infoText = [ 
    "Lorenz", 
    "Schmid", 
    "Programmer", 
    "Based in Berlin"  
  ]

  return (
    <>

    <ContactContainer>
      <ContactInfoContainer>
      <PersonalInfoBox>{infoText.map((item) => <p>{item}</p>)}</PersonalInfoBox>
      </ContactInfoContainer>
      <FormContainer>
        <h2>Write Me</h2>
         <Input placeholder='Name' type='text' name='name'/>
         <Input placeholder='Last Name' type='text' name='lastName' />
         <Input placeholder='E-Mail' type='email' name='email' value={email} onChange={handleOnChange} />

         <FormTextArea placeholder='Your Message!'></FormTextArea>
         <FormSubmit onClick={emailValidation}>Submit</FormSubmit>
         {message}
      </FormContainer>
    </ContactContainer>
    </>
  )
}

export default Contact
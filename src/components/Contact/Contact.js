import React, { useState } from 'react'
import {
  ContactContainer, 
  FormContainer, 
  InputName,
  InputLastName, 
  FormSubmit,
  FormTextArea,
} from './ContactStyles'; 

const Contact = () => {
  return (
    <ContactContainer>
      <FormContainer>
         <InputName placeholder='Name'></InputName>
         <InputLastName placeholder='Last Name'></InputLastName>
         <FormTextArea placeholder='Your Message!'></FormTextArea>
         <FormSubmit>Submit</FormSubmit>
      </FormContainer>
    </ContactContainer>
  )
}

export default Contact
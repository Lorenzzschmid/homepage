import React, { useState } from 'react'
import {
  ContactContainer, FormContainer,
} from './ContactStyles'; 

const Contact = () => {
  return (
    <ContactContainer>
      <FormContainer>
          <input className='input' type='text' name='name' placeholder='Name' />
          <input className='input' type='text' name='name' placeholder='Last Name' />
          <textarea className='text' placeholder='Write me anything!' />
          <input className='button' type='submit' value='Submit' />
      </FormContainer>
    </ContactContainer>
  )
}

export default Contact
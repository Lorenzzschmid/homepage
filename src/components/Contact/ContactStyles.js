import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;   
`

export const FormContainer = styled.form`
    width: 50rem;
    height: 50rem;
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    border: 2px red dashed;

`
export const InputName = styled.input`
    width: 30rem;
    height: 3rem;
    background-color: lightblue;
    text-align: center;
`
export const InputLastName = styled.input`
    width: 30rem;
    height: 3rem;
    background-color: lightblue;
    text-align: center;
`
export const FormSubmit = styled.button`
    width: 30rem;
    height: 3rem;
    background-color: lightblue;
    text-align: center;
`
export const FormTextArea = styled.textarea`
    width: 30rem; 
    height: 10rem;
    background-color: lightblue;
    border-radius: 4px;
    text-align: center;
    justify-content: center;
`
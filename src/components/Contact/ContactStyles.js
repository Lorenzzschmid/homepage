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
    background-color: #2B4061;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;

`
export const InputName = styled.input`
    width: 30rem;
    height: 3rem;
    background-color: #AAC2E6;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 0.5rem;
`
export const InputLastName = styled.input`
    width: 30rem;
    height: 3rem;
    background-color: #AAC2E6;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 0.5rem;
`
export const FormTextArea = styled.textarea`
    width: 30rem; 
    height: 10rem;
    background-color: #AAC2E6;
    border-radius: 0.5rem;
    text-align: center;
    justify-content: center;
    border: 2px solid black;
    font-size: 1.5rem;
    `
    export const FormSubmit = styled.button`
        width: 30rem;
        height: 3rem;
        background-color: #AAC2E6;
        text-align: center;
        font-size: 1.5rem;
        border-radius: 0.5rem;
    `
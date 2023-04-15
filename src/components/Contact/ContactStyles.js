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
    border: 2px red dashed;
    input {
        height: 3rem;
        width: 20rem;
        border-radius: 4%;
        color: white;
        background-color: darkgrey;
    }

    textarea {
        width: 20rem;
        height: 10rem;
        background-color: grey;
    }
    button {
        background-color: pink;
    }
`
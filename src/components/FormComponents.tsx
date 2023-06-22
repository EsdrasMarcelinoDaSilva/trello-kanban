import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #ccc;
    .link{
        text-align: center;
        margin-top: 1em;
        font-size: 1.2em;
        color: #fff;
        text-decoration: 0;
    }
`

export const Title = styled.h1`
    text-align: center;
    color: #fff;
    margin-bottom: 1em;
`

export const Subtitle = styled.h2`
    text-align: center;
    color: #fff;
`

export const Form = styled.form`
    background-image: linear-gradient(to left, #730E62,#3C1E59,#0A3459);
    border-radius: 1em;
    overflow: hidden;
    width: 20em;
    padding: 3em;
    display: flex;
    flex-direction: column;
`
export const Label = styled.label`
    margin-bottom: 0.5em;
    color: #fff;

`

export const Input = styled.input`
    outline: 0;
    margin-bottom: 2em;
    padding: 0.7em;
    border:0;
    border-radius: 0.9em;
    border: 2px solid #191a59b5;
`

export const Button = styled.button`
    background-color:#191A59;
    color: #fff;
    border:0;
    border-radius: 0.9em;
    font-size: 1.2em;
    box-shadow: 0 0 0.5em #191A59;
    padding: 0.7em;
    cursor: pointer;
`

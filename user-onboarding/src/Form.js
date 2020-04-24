import React from 'react'
import styled from "styled-components";

const UserForm = styled.div`
border: 1px solid 2rem;
background-color: gray;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 0 0 10px 10px gray;	
background-color: green;

`
const ErrorWarning = styled.p`
width: 100%;
color: red;
font-weight: bold;
background-color: yellow;
`

function Form (props){
    const {
        values,
        onInputChange,
        onCheckBoxChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <UserForm>
            <h2>Member Form</h2>
            <div className='errors'>
                <ErrorWarning>
                {errors.username}
                {errors.email}
                {errors.password}
                {errors.termsOfService}
                </ErrorWarning>
            </div>
            {/* these three for text input for username, address, and email */}
            <label> Username: &nbsp;
                <input
                    value = {values.username}
                    onChange = {onInputChange}
                    name = 'username'
                    type = 'text'
                />
            </label>
            <label> Email: &nbsp;
                <input
                    value = {values.email}
                    onChange = {onInputChange}
                    name = 'email'
                    type = 'text'
                />
            </label>
            <label> Password: &nbsp;
                <input
                    value = {values.password}
                    onChange = {onInputChange}
                    name = 'password'
                    type = 'password'
                />
            </label>

            {/* following is for checkbox  */}
            <label>Terms of Service 
                <input
                    // checked={values.termsOfService}
                    onChange={onCheckBoxChange}
                    name='termsOfService'
                    type='checkbox' /> </label>
            
            {/* the following is for button which needs a handler */}
            <button onClick = {onSubmit} >Submit</button>    
        </UserForm>
    )
}

export default Form
// disabled={disabled}
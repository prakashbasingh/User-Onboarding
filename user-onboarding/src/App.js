import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import styled from "styled-components";

import Form from './Form'
import User from './UserCard'

////////////styling the container
const StyledContainer = styled.div`
  border: 2px solid green;
  margin: 5rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  box-shadow: 0 0 10px 10px red;	
  color: white;

`

const url = 'https://reqres.in/api/users'

// ?shape of the form
const initialFormValues = {
  //TEXT INPUTS
  username: '',
  email: '',
  password: '',
  //CHECKBOXES
  termsOfService:'',
}

// shape of the validation errors
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  termsOfService: '',
}
// setting validation with  error message 
const formErrorCheck = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must have at least 3 characters!')
    .required('Username is required!'),
  email: yup
    .string()
    .email('A VALID email is required!')
    .required('email is required!'),
  password: yup
    .string()
    .min(6,'Passwords must be at least 6 characters long!')
    .required('Password  is required!'),
  termsOfService: yup
    .boolean()
    .oneOf([true], "You must accept Terms and Conditions"),
})



function App() {

  const [users, setUsers] = useState([])
  // console.log('afofuh', users)
  const [formValues, setFormValues] = useState(initialFormValues)

  const [formDisabled, setFormDisabled] = useState(true) //state to track submit button disabled

  const [formErrors, setFormErrors] = useState(initialFormErrors)// state to track validation errors


  //fetching user form from API and setting them in state
  const getUser = () => {
    axios.get(url)
    .then(success => {
      setUsers([...users, success.data])
      // console.log(success.data, 'are we getting data?????????')
    })
    .catch(error => {
      // debugger
      // console.log(error, 'do we have errors??????')
    })
  }
  // getting user from API
    useEffect(() => {
      getUser()
    }, [])

    //creating a function to post new user to the API and setting updated list of friends in state
  const postUser = (user) =>{
    axios.post(url, user)
    .then(success => {
      setUsers([...users, success.data]) 
      debugger
      // console.log(success, 'are we getting data?????????')
    })
    .catch(error => {
     
      console.log(error, 'Is it Error??????')
    })
  }

  //setup to run validation if the form value changes and allowing enable and disable the submit button
  useEffect(() => {
    formErrorCheck.isValid(formValues)
    .then(valid => {
      setFormDisabled(!valid)
    })
  }, [formValues])

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      termsOfService: formValues.termsOfService
          }
      //this post new user to API
    //  setUsers([...users, newUser]) 
    postUser(newUser)
    setFormValues(initialFormValues)
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
//this updates the form errors
    yup
      .reach(formErrorCheck, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckboxChange = evt => {
    const { name } = evt.target.name
    const isChecked = evt.target.checked

    setFormValues({
      // ...formValues,
      termsOfService: {
        ...formValues.termsOfService,
        [name]: isChecked,
      }
    })
  } 

  return (
    <StyledContainer>
      <header className="App-header"> <h1>User Sign Up</h1>  </header>
      <Form values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={formDisabled}
            errors={formErrors} />

      {
        users.map(user => {
          return(
            <User details={user} />
          )
        })
      }
    </StyledContainer>
  );
}

export default App;





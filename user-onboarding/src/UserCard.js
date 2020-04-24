import React from 'react'
import styled from "styled-components";

const UserContainer =styled.div`
margin: 2rem;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid black;
color: black;
box-shadow: 0 0 10px 10px black;	
background-color: orange;
font-weight: bold;


`

function User({ details }) {
 
  return (
    <UserContainer>
      <h2>Username: {details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.address}</p>
      <p>Terms of Service: {details.termsOfService} </p>

    </UserContainer>
  )
}

export default User


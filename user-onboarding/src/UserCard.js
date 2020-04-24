import React from 'react'


function User({ details }) {
 
  return (
    <div className='user-container'>
      <h2>Username: {details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.address}</p>
      <p>Terms of Service: {details.termsOfService} </p>

    </div>
  )
}

export default User


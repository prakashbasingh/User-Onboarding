import React from 'react'


function Member({ details }) {
 
  return (
    <div className='user-container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.address}</p>
      <p>Terms of Service: {details.termsOfService} </p>

    </div>
  )
}

export default Member


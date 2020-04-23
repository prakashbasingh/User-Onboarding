import React from 'react'


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
        <form className = 'user-form'>
            <h2>Member Form</h2>
            <div className='errors'>
                {errors.username}
                {errors.email}
                {errors.password}
                {errors.termsOfService}
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
                    type = 'text'
                />
            </label>

            {/* following is for checkbox  */}
            <label>
                <input
                    onChange={onCheckBoxChange}
                    name='termsOfService'
                    type='checkbox' /> Terms of Service </label>
            
            {/* the following is for button which needs a handler */}
            <button onClick = {onSubmit} disabled={disabled}>
                 Submit 
            </button>    
        </form>
    )
}

export default Form
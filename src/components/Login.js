import React from 'react'
import { TextField} from "@mui/material";
import "../css/Login.css"

const Login = () => {
    return (
        <div className='login'>
          <h1>Log In</h1>
          <div className='input'>
              <TextField
                variant='outlined'
                label='First Name'
                name='firstName'
                id="outlined-error"
                fullWidth
              />
              <TextField
                variant='outlined'
                label='Last Name'
                name='lastName'
                id="outlined-error"
                fullWidth
              />
              <TextField
                variant='outlined'
                label='Email'
                name='email'
                id="outlined-error"
                fullWidth
              />
              <TextField
                variant='outlined'
                label='Mobile Number'
                name='mobileNumber'
                id="outlined-error"
                fullWidth
              />
              <TextField
                type="date"
                variant='outlined'
                label="Date of Birth"
                InputLabelProps={{ shrink: true }}
                name='mobileNumber'
                fullWidth
                id='date'
              />
          </div>
          <button className='button'>Sign Up</button>
        </div>
    )
}

export default Login
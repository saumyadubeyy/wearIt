import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
      Please enter a valid URL
      <br />
      <span>Go back to <Link to="/wearIt" className='link'><span style={{color: "#F5A123"}}>Homepage</span></Link></span>
    </div>
  )
}

export default Error
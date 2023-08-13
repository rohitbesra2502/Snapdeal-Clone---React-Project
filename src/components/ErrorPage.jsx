import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div style={{marginTop:'200px' , display: 'flex' , flexDirection:'column' ,justifyContent:'center' , justifyItems:'center' , alignItems:'center'}}>
        <h2>404</h2>
        <h3>UH OH You're lost.</h3>
        <p>
            The page you are looking for does not exists. How you got here is a mystery. But you can click the button below to go back to the homepage.
        </p>

        <NavLink to="/">
            <button>Go Back to Home Page</button>
        </NavLink>
    </div>
  )
}

export default ErrorPage
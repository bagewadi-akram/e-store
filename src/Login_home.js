import React from 'react'
import './Login.css'

function Login_home() {
  return (
    <div>
         <div className="login_container">
        <h1>Sign-Up</h1>

        <form>
          <h5>Email:</h5>
          <input
            type="text"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password:</h5>
          <input
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            // onClick={signIn}
            className="login_signInButton"
          >
            Sign Up
          </button>
        </form>
        <span className='login_line'>Already have account !</span>
        </div>
    </div>
  )
}

export default Login_home
import React from 'react'
import '../login/Login.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
const Login = () => {
  return <>
    <section className='section-login'>
      <h1>Sign In</h1>
      <div className="login-grid">
      <div className="login-form">
        <form action="post">
          <label htmlFor="" className='label-border'>Email</label>
          <input type="email" placeholder='Email' />
          <label htmlFor="" className='label-border'>Password</label>
          <input type="password" placeholder='Password' />
          <div>
          <input type="checkbox" name="rem" id="rem" />
          <label htmlFor="" className='labelrem'>Remember Me</label>
          </div>
        </form>
        <div className='login-link'>
        <h6><a href="#">Forgot your password?</a></h6>
        <button>Sign In</button>
        </div>
      </div>
      <div className="login-card">
        <h2>Don't have an Trade Account?</h2>
        <p>All qualified interior designers, decorators and other trade professionals are invited to join the Skyline Furniture Trade Program. Membership provides you with instant access to our latest catalog including the newest additions to the assortment, pricing, and fabrics.</p>
        <h5><a href="#">Create Account <FaArrowAltCircleRight className='login-icon' /></a></h5>
      </div>
      </div>
    </section>
  </>
}

export default Login
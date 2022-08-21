import React from 'react';
import '@styles/Signup.scss';

const SignUp = () => {
  return (
    <main>
      <section className="signup">
        <div className="signup__container">

          <div className="signup__title">
            <h1 className="signup__title--content">Sign-up</h1>
          </div>

          <form action="/" className="signup__form">
            <label htmlFor="name" className="signup__form--label">Enter your name</label>
            <input type="text" id="name" placeholder="Name" className="signup__form--input" />
            <label htmlFor="email" className="signup__form--label">Enter your email</label>
            <input type="email" id="email" placeholder="E-mail" className="signup__form--input" />
            <label htmlFor="password" className="signup__form--label">Create password</label>
            <input type="password" id="password" placeholder="Password" className="signup__form--input" />
            <input type="submit" value="Sign up" className="signup__form--sign" />
          </form>

          <div classname="log">
            <p className="log__text">Already have an account?</p>
            <div className="log__link">
              <a href="/login" className="log__link--content">Log in</a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export {SignUp}
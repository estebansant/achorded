import React from 'react'
import '@styles/Login.scss';

const Login = () => {
  return (
    <main>
      <section className="login">
        <div className="login__container">

          <div className="login__container">
            <h1 className="login__container--title">Login</h1>
          </div>

          <form action="/" className="form">
            <label htmlFor="email" className="form__label">Email address</label>
            <input type="email" id="email" placeholder="example@address.com" className="form__label--email" />
            <label htmlFor="password" className="form__label">Enter password</label>
            <input type="password" id="password" placeholder="********" className="form__label--password" />
            <input type="submit" value="log in" className="form__login" />
            <a href="/" className="form__forgot">Forgot my password</a>
          </form>

          <div classname="signup">
            <p className="signup__text">Don't have an account?</p>
            <button className="signup__button">
              <a href="/ginup" className="signup__button--link">Sign up</a>
            </button>
          </div>

        </div>
      </section>
    </main>
  )
}

export { Login }
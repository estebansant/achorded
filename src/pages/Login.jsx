import React from 'react'
import '@styles/Login.scss';

const Login = () => {
  return (
    <main>
      <section className="login">
        <div className="login__container">

          <div className="login__title">
            <h1 className="login__title--content">Login</h1>
          </div>

          <form action="/" className="form">
            <label htmlFor="email" className="form__label">Email address</label>
            <input type="email" id="email" placeholder="example@address.com" className="form__input" />
            <label htmlFor="password" className="form__label">Enter password</label>
            <input type="password" id="password" placeholder="********" className="form__input" />
            <input type="submit" value="Log in" className="form__login" />
            <a href="/" className="form__forgot">Forgot my password</a>
          </form>

          <div classname="create">
            <p className="create__text">Don't have an account?</p>
            <div className="create__link">
              <a href="/signup" className="create__link--content">Sign up</a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export { Login }
import React from 'react'
import '@styles/Login.scss';

const Login = () => {

  const loginForm = React.useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data)
  }

  return (
    <main>
      <section className="login">
        <div className="login__container">

          <div className="login__title">
            <h1 className="login__title--content">Login</h1>
          </div>

          <form action="/" className="form" ref={loginForm}>
            <label htmlFor="email" className="form__label">Email address</label>
            <input type="email" name="email" placeholder="example@address.com" className="form__input" />
            <label htmlFor="password" className="form__label">Enter password</label>
            <input type="password" name="password" placeholder="********" className="form__input" />
            <button
              className="form__login"
              onClick={handleSubmit}
            >
              Log in
            </button>
            <a href="/" className="form__forgot">Forgot my password</a>
          </form>

          <div className="create">
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
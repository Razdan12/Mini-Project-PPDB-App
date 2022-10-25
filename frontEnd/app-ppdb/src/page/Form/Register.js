import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <div className="kotakLogin">
      <div className="loginForm" data-aos="fade-up">
        
        <div className="tab-content">
          <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form>
              <div className="text-center mb-3">
                <h2 className="text-title"><Link to="/">My-PPDB</Link></h2>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="bi bi-facebook"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="bi bi-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="bi bi-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="bi bi-github"></i>
                </button>
              </div>

              <h3 className="text-center">Register</h3>

              <div className="form-outline mb-4">
                <input type="text" id="registerName" className="form-control" />
                <label className="form-label" for="registerName">Name</label>
              </div>

              {/* <!-- Username input --> */}
              <div className="form-outline mb-4">
                <input type="text" id="registerUsername" className="form-control" />
                <label className="form-label" for="registerUsername">Username</label>
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input type="email" id="registerEmail" className="form-control" />
                <label className="form-label" for="registerEmail">Email</label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input type="password" id="registerPassword" className="form-control" />
                <label className="form-label" for="registerPassword">Password</label>
              </div>

              {/* <!-- Repeat Password input --> */}
              <div className="form-outline mb-4">
                <input type="password" id="registerRepeatPassword" className="form-control" />
                <label className="form-label" for="registerRepeatPassword">Repeat password</label>
              </div>


              {/* <!-- 2 column grid layout --> */}
              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                  {/* <!-- Simple link --> */}
                  <Link to="/">Forgot password?</Link>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" className="btn btn-primary btn-block mb-4">Daftar</button>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>I Have Account ? <Link to="/login">Login</Link></p>
              </div>
            </form>
          </div>
          <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            
          </div>
        </div>
        {/* <!-- Pills content --> */}
      </div>
    </div>
    </>
  )
}

export default Register
import React from 'react'
import "./style.css"
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="kotakLogin" >
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

              <h3 className="text-center">LOGIN</h3>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" for="loginName">Email or username</label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input type="password" id="loginPassword" className="form-control" />
                <label className="form-label" for="loginPassword">Password</label>
              </div>

              {/* <!-- 2 column grid layout --> */}
              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-3 mb-md-0">
                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                    <label className="form-check-label" for="loginCheck"> Remember me </label>
                  </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                  {/* <!-- Simple link --> */}
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>Not a member? <Link to="/register">Register</Link></p>
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

export default Login
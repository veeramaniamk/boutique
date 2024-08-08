import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4">
                {/* <div className="text-center mb-3">
                  <a href="#!">
                    <img src="./assets/img/bsb-logo.svg" alt="BootstrapBrain Logo" width="175" height="57" />
                  </a>
                </div> */}
                <h2 className="bout-reg">Welcome to Boutique</h2>
                <p className="fashion-meet">
                  Elevate your style with Boutique – where <br /> fashion meets elegance
                </p>
                <form action="#!">
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          id="firstName"
                          placeholder="Name"
                          required
                        />
                        {/* <label htmlFor="firstName" className="form-label">First Name</label> */}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="phonenumber"
                          id="phonenumber"
                          placeholder="Phone Number"
                          required
                        />
                        {/* <label htmlFor="lastName" className="form-label">Last Name</label> */}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          required
                        />
                        {/* <label htmlFor="email" className="form-label">Email</label> */}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <select className="form-control" name="gender" id="gender" required>
                          <option value="" disabled selected>
                            Select Gender
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Password"
                          required
                        />
                        {/* <label htmlFor="password" className="form-label">Password</label> */}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="confirmpassword"
                          id="confirmpassword"
                          placeholder="Confirm Password"
                          required
                        />
                        {/* <label htmlFor="confirmpassword" className="form-label">Password</label> */}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="iAgree"
                          id="iAgree"
                          required
                        />
                        <label className="form-check-label text-secondary" htmlFor="iAgree">
                          I agree to the{' '}
                          <a href="#!" className="link-primary text-decoration-none">
                            terms and conditions
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-1">
                        <button className="sign-color" type="submit">
                          Sign up
                        </button>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="m-0 text-secondary text-center">
                        Already have an account?{' '}
                        <Link className="link-primary text-decoration-none" to="/login">Sign in</Link>
                        {/* <a href="/login" className="link-primary text-decoration-none">
                          Sign in
                        </a> */}
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

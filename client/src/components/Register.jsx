import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gender: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1000/user/signup", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        gender: formData.gender,
        password: formData.password,
      });
      console.log("Registration successful", response.data);
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("There was an error!", error);
    }
  };

  return (
    <section className="bg-light py-3 py-md-4 register-back-img">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4">
                <h2 className="bout-reg">Welcome to Boutique</h2>
                <p className="fashion-meet">
                  Elevate your style with Boutique – where <br /> fashion meets elegance
                </p>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
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
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <select
                          className="form-control"
                          name="gender"
                          id="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>Select Gender</option>
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
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
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
                        <Link className="link-primary text-decoration-none" to="/login">
                          Sign in
                        </Link>
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

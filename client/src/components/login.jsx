import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserRole = sessionStorage.getItem('userRole');
    console.log(storedUserRole);
    
    if (storedUserRole) {
      if (storedUserRole === '111') {
        navigate('/admindashboard');
      } else if (storedUserRole === '110') {
        navigate('/designerhome');
      } else if (storedUserRole === '100') {
        navigate('/usermain');
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    try {
      const response = await axios.post('http://localhost:1000/user/signin', { email, password });
      if (response.status === 200) {
        const userData = response.data.data;
        console.log(userData);
        
        onLogin(userData); 
        if (userData.user_type === 111) {
          navigate('/admindashboard');
        } else if (userData.user_type === 110) {
          navigate('/designerhome');
        } else if (userData.user_type === 100) {
          navigate('/usermain');
        }
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      alert('Error during login. Please try again.');
    }
  };

  return (
    <section className="py-3 py-md-5 login-back-img">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4">
                <h2 className="bout-reg">Welcome to Boutique</h2>
                <p className="fashion-meet">
                  Elevate your style with Boutique – where <br /> fashion meets elegance
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
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
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-1">
                        <button className="sign-color" type="submit">Sign In</button>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="m-0 text-secondary text-center">
                        Don't have an account? 
                        <Link className="link-primary text-decoration-none" to="/register">Sign up</Link>
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

export default Login;

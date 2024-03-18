import React, { useEffect, useState } from 'react'
import { InputType } from '../components'
import { Link } from 'react-router-dom';
import store from "../redux/store";
import { userLogin } from './../redux/features/auth/authActions';

const Login = () => {
    const [role, setRole] = useState("donar");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      store.dispatch(userLogin({role, email, password}));
    }
  return (
    <>
        <div className="row g-0">
            <div className="col-md-8">
                <div className="form-banner">
                    <img src="../../assets/images/banner1.jpg" alt="login banner image" />
                    {/* <img src="../../public/assets/images/banner1.jpg" alt="login banner image" /> */}
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <hr />
                        <div className="mb-3 d-flex">
                          
                          <div className="form-check">
                            <input 
                              type="radio"
                              className="form-check-input"
                              name="role"
                              id="donarRadio"
                              value="donar"
                              onChange={(e) => setRole(e.target.value)}
                              defaultChecked
                            />
                            <label className="form-check-label" htmlFor="donarRadio">Donar</label>
                          </div>

                          <div className="form-check ms-2">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="role"
                              id="adminRadio"
                              value="admin"
                              onChange={(e) => setRole(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="adminRadio">Admin</label>
                          </div>

                          <div className="form-check ms-2">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="role"
                              id="hostpitalRadio"
                              value="hospital"
                              onChange={(e) => setRole(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="hostpitalRadio">Hospital</label>
                          </div>

                          <div className="form-check ms-2">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="role"
                              id="organisationRadio"
                              value="organisation"
                              onChange={(e) => setRole(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="organisationRadio">Organisation</label>
                          </div>

                        </div>
                        <div className="mb-3">
                            <InputType labelTitle="Email address *" placeholder="Enter email adress" inputType="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required={true} />
                        </div>
                        <div className="mb-3">
                            <InputType labelTitle="Password *" placeholder="Enter password" inputType="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} required={true} />
                        </div>
                        <div className="d-flex justify-content-around align-items-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <p>Don't have an account? <Link to="/auth/register">Sign up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login

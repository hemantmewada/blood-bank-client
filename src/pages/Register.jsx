import React, { useEffect, useState } from 'react'
import { InputType } from '../components'
import {Link} from "react-router-dom"
import store from '../redux/store';
import { userRegister } from '../redux/features/auth/authActions';

const Register = () => {
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(userRegister({role, name, organisationName, hospitalName, email, password, website, address, phone}));
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
                        <h1>Register</h1>
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
                        { (role == "admin" || role == "donar") && (
                            <div className="mb-3">
                                <InputType labelTitle="Name *" placeholder="Enter name" inputType="text" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name} required={true} />
                            </div>
                        )}
                        { role == "organisation" && (
                            <div className="mb-3">
                                <InputType labelTitle="Organisation Name *" placeholder="Enter organisation" inputType="text" id="organisationName" name="organisationName" onChange={(e) => setOrganisationName(e.target.value)} value={organisationName} required={true} />
                            </div>
                        )}
                        { role == "hospital" && (
                            <div className="mb-3">
                                <InputType labelTitle="Hospital Name *" placeholder="Enter hospital name" inputType="text" id="hospitalName" name="hospitalName" onChange={(e) => setHospitalName(e.target.value)} value={hospitalName} required={true} />
                            </div>
                        )}
                        <div className="mb-3">
                            <InputType labelTitle="Email address *" placeholder="Enter email address" inputType="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required={true} />
                        </div>
                        <div className="mb-3">
                            <InputType labelTitle="Password *" placeholder="Enter password" inputType="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} required={true} />
                        </div>
                        <div className="mb-3">
                            <InputType labelTitle="Website (optional)" placeholder="Enter website link" inputType="text" id="website" name="website" onChange={(e) => setWebsite(e.target.value)} value={website} />
                        </div>
                        <div className="mb-3">
                            <InputType labelTitle="Address *" placeholder="Enter address" inputType="text" id="address" name="address" onChange={(e) => setAddress(e.target.value)} value={address} required={true} />
                        </div>
                        <div className="mb-3">
                            <InputType labelTitle="Phone *" placeholder="Enter phone number" inputType="text" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} required={true} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        {/* <button type="reset" className="btn btn-danger ms-2">Reset</button> */}
                        <p>Already have an account? <Link to="/auth/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register

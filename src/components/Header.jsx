import React from 'react';
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {
    const {user} = useSelector(state => state.auth);
    var userName = "";
    if (user?.role == "hospital") {
        userName = user?.hospitalName;
    }else if(user?.role == "organisation"){
        userName = user?.organisationName;
    }else{
        userName = user?.name;
    }
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        // window.location.replace("/auth/login");
        toast.success("Logged out successfully.");
        setTimeout(() => {
            navigate("/auth/login");
        }, 1000);
    }
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark text-white">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">BLOOD BANK</a>
                <button
                className="navbar-toggler bg-white "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link text-white active" aria-current="page" href="#">
                            Welcome to {user?.role} panel
                        </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav justify-content-center ">
                        <li className="nav-item">
                            <p className="nav-link text-white"><FaUser /> Welcome {userName}</p>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

  )
}

export default Header;
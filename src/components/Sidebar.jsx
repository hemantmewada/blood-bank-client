import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
const menus = [
    {
        name: "Home",
        path: "/",
        icon: "fa-solid fa-house"
    },
    {
        name: "Inventory",
        path: "/inventory",
        icon: "fa-solid fa-warehouse"
    },
    {
        name: "Donar",
        path: "/donar",
        icon: "fa-solid fa-hand-holding-medical"
    },
    {
        name: "Hospital",
        path: "/hospital",
        icon: "fa-solid fa-hospital"
    }
];
const Sidebar = () => {
    const location = useLocation();
  return (
    <div
    className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
    style={{height: "88vh"}}
    >
    <ul className="nav nav-pills flex-column mb-auto">
        {
            menus.map((menu, index) => {
                const isActive = menu.path == location.pathname;
                return (
                    <li key={index} className="nav-item">
                        <Link to={menu.path} className={`nav-link text-white ${isActive && 'active'}`}><i className={menu.icon}></i> {menu.name}</Link>
                    </li>
                )
            })
        }
    </ul>
    </div>
  )
}

export default Sidebar;
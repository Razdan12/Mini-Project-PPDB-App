import React from 'react'
import { Link } from 'react-router-dom'
import { ImHome, ImEarth } from "react-icons/im";
import {
    BsPersonCircle,
    BsPersonLinesFill,
    BsStickiesFill,
    BsFillStarFill,
    BsPatchCheckFill,
    BsFillEnvelopeFill
} from "react-icons/bs";
import "../assets/css/sb-admin-2.css"

const NavAdmin = () => {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <ImEarth />
                    </div>
                    <div className="sidebar-brand-text mx-3">Portfolio</div>
                </Link>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to="/admin">
                        <ImHome />
                        <span> Dashboard</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Interface
                </div>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/profile" >
                        <BsPersonCircle />
                        <span>  Profile</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/about" >
                        <BsPersonLinesFill />
                        <span>  About</span>
                    </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/resume" >
                        <BsStickiesFill />
                        <span>  Resume</span>
                    </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/portfolio" >
                        <BsFillStarFill />
                        <span>  Portfolio</span>
                    </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/service" >
                        <BsPatchCheckFill />
                        <span>  Service</span>
                    </Link>

                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/message">
                        <BsFillEnvelopeFill />
                        <span>  Pesan</span>
                    </Link>

                </li>
                <li className="nav-item">
                    <button type="button" class="btn btn-danger">LOGOUT</button>

                </li>
            </ul>

            <script src="../assets/js/sb-admin-2.min.js"></script>
        </>
    )
}

export default NavAdmin
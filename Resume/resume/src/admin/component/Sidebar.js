import React from 'react'
import {Link} from 'react-router-dom'
import "../assets/css/sb-admin-2.css"

const NavAdmin = () => {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="bi bi-house-door"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Portfolio</div>
                </Link>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to="/admin">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Interface
                </div>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/profile" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Profile</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/about" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>About</span>
                    </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/resume" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Resume</span>
                    </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/portfolio" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Portfolio</span>
                    </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/service" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Service</span>
                    </Link>

                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/contact" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Kontak</span>
                    </Link>

                </li>
                <li >
                <button type="button" class="btn btn-danger">LOGOUT</button>

                </li>
            </ul>

            <script src="../assets/js/sb-admin-2.min.js"></script>
        </>
    )
}

export default NavAdmin
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const handleLogout = (e) => {
        // Handle logout here 
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        navigate('/');
    }
    return (
        <div>
            {/* Main Navigation */}
            <header>
                {/* Sidebar */}
                <nav id="sidebarMenu" className={`collapse d-lg-block sidebar collapse bg-white ${isSidebarOpen ? 'show' : ''}`}>
                    <div className="position-sticky">
                        <div className="list-group list-group-flush  mt-4">
                            <NavLink to="/" className="list-group-item list-group-item-action py-2 ripple" style={({ isActive }) => ({
                                    color: isActive
                                        ? "active"
                                        : "",
                                })}>
                                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                            </NavLink>
                            <NavLink to="/dashboard" className="list-group-item list-group-item-action py-2 ripple" activeClassName="active">
                                <i className="fas fa-chart-area fa-fw me-3"></i><span>dashboard</span>
                            </NavLink>
                            <NavLink to="/task" className="list-group-item list-group-item-action py-2 ripple" activeClassName="active">
                                <i className="fas fa-chart-area fa-fw me-3"></i><span>Task</span>
                            </NavLink>
                            <Button onClick={handleLogout} className="list-group-item list-group-item-action py-2 ripple" activeClassName="active">
                                <i className="fas fa-chart-area fa-fw me-3"></i><span>Logout</span>
                            </Button>
                            {/* Add other links in similar fashion */}
                        </div>
                    </div>
                </nav>
                {/* Navbar */}
                <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div className="container-fluid">
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            onClick={toggleSidebar}
                            aria-controls="sidebarMenu"
                            aria-expanded={isSidebarOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <NavLink className="navbar-brand" to="/dasboard">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="25"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </NavLink>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Sidebar;

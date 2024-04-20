import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");

    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
                <img 
                    src="./src/assets/img/pokemon-location-1-32.png" 
                    alt="pokemon-location" 
                />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                className={setActiveClass}
                                to="/"
                            >
                            Home
                            </NavLink>
                        </li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="nav-item">
                            <NavLink
                                className={setActiveClass}
                                to="/pokemones"
                            >
                            Pokemones
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
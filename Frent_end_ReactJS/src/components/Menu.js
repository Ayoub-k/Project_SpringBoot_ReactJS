import React from 'react'
import {Link,NavLink}  from 'react-router-dom'


function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="/ListGroup">Groups</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/CreateGroup">Ajouter</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/SupprimerGroup">Supprimer</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu
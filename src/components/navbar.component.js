import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
        <nav className="navbar navbar-light bg-light navbar-expand-lg">
            <Link to="/" className="navbar-brand">Fitboard</Link>
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/" className="nav-link">Exercises</Link>
                </li>
                <li className="navbar-item">
                <Link to="/create" className="nav-link">Add New Exercise Log</Link>
                </li>
                <li className="navbar-item">
                <Link to="/user" className="nav-link">Create User</Link>
                </li>
            </ul>
            </div>
        </nav>
        );
    }
}
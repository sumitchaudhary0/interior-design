import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="bar container">
                <p className="logo"><Link to="">Logo Here</Link></p>
                <ul className="navbar">

                    <li><Link to="">Home</Link></li>
                    <li><Link to="">Page</Link></li>
                    <li><Link to="">About us</Link></li>
                    <li><Link to="">Services</Link></li>
                    <li><Link to="">Portfolio</Link></li>
                    <li><Link to="">contact</Link></li>
                    <li><Link to=""><i className="fa fa-search" aria-hidden="true"></i></Link></li>
                </ul>
            </div>
        )
    }
}

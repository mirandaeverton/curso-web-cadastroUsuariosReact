import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/" className="fa fa-home"> Início</Link>
            <Link to="/users" className="fa fa-users"> Users</Link>
        </nav>
    </aside>
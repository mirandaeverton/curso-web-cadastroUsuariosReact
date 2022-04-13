import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/" className="fa fa-home"> Início</a>
            <a href="#/users" className="fa fa-users"> Users</a>
        </nav>
    </aside>
import React from 'react'

import {Link} from 'react-router-dom'

import './navbar.css'

export default function Navbar(){
    return(
        <div>
            <div class="navbar">
                <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
                <a href=""><i class="fa fa-fw fa-search"></i> Search</a>
                <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                <Link to="/login"><i class="fa fa-fw fa-user"></i> Login</Link>
            </div>
        </div>
    )
}
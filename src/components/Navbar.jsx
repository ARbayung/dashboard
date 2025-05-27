import React from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

function Navbar() {
    return (
        <nav className="navbar">
                <div>
                    <Avatar sx={{width: "100%", height:"100%", bgcolor:"#FF5B31"}}>AR</Avatar>
                </div>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/directory">Directory</Link></li>
                <li><Link to="/itrequest">IT Request</Link></li>
                <li><Link to="/tickets">Tickets</Link></li>
                <li><Link to="/todo">ToDo List</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
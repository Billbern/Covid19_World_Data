import React from 'react';
import Notifier from './Notifier';

function NavBar(){
    return(
        <div className="navbar">
            <div className="menu_bars">
                <span className="bar3 bar_m"></span>
                <span className="bar3 bar_m"></span>
                <span className="bar3"></span>
            </div>
            <p className="logo">Tracker</p>
            <div className="nav_right">
                <input type="search" name="search" id="sb" placeholder="Search" />
                <Notifier />
            </div>
        </div>
    );
}

export default NavBar;
import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

    const newStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h1>Logo</h1>
            <ul className="nav-links">
            <Link to="/about" style={newStyle}>
            {/* Anchor tag대신에 Link를 달아서 라우터를 실행시킨다 */}
                <li>About</li>
            </Link>
            <Link to="/shop" style={newStyle}>
                <li>Shop</li>  
            </Link>
        </ul>
</nav>
    );
}

export default Nav;

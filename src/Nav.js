import React from 'react';

import './Nav.css';

const Nav = ( props ) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Nav" id="nav" style={style}>
        <div class="container">

            <ul>
                <li><a href=""><i class="fas fa-home"></i></a></li>
                <li><a href="" >Article</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="" class="active">Account</a></li>

            </ul>

        </div>

    </div>

    );

    }
export default Nav;
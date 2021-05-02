import React from 'react';
import './Nav.scss';

const Nav = () => {
    return (
        <div className="nav">
            <div className="navContainer">
                <h4>Instagram</h4>
                
                <div className="search">
                    <span></span>
                    <input type="text" placeholder="검색" />
                </div>

                <div className="icons">
                    <span className="home"></span>
                    <span className="message"></span>
                    <span className="like"></span>
                    <span className="myPage"></span>
                </div>
            </div>
            
        </div>
    );
};

export default Nav;
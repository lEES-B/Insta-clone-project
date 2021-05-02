import React from 'react';
import './Nav.scss';
import { Link, useHistory } from 'react-router-dom'

const Nav = () => {
    let history = useHistory();

    return (
        <div className="nav">
            <div className="navContainer">
                <h4>Instagram</h4>
                
                <div className="search">
                    <span></span>
                    <input type="text" placeholder="검색" />
                </div>

                <div className="icons">
                    <span className="home" onClick={() => {
                        history.push('/main')
                    }}></span>
                    <span className="message"></span>
                    <span className="like"></span>
                    <span className="myPage" onClick={() => {
                        history.push('/mypage')
                    }}></span>
                </div>
            </div>
            
        </div>
    );
};

export default Nav;
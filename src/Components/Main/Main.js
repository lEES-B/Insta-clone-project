import React from 'react';
import Nav from '../Nav/Nav';
import './Main.scss';

const Main = () => {
    return (
        <div>
            <Nav />

            <div className="main_container">

                <div className="main_left">
                    <div className="user_lists">상단 유저 피드</div>
                    <div className="feeds">피드 콘텐츠</div>
                </div>

                <div className="main_right">
                    sdfsdfsdfsdfsfsdfds
                </div>
            </div>
        </div>
    );
};

export default Main;
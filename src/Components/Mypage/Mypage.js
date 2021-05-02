import React from 'react';
import Nav from '../Nav/Nav';
import './Mypage.scss';

const Mypage = () => {
    return (
        <div className="mypage">
            <Nav />

            <div className="profile">
                <div className="profile_img">
                    <div className="img"></div>
                </div>

                <div className="profile_contents">
                    <div className="profile_id">
                        <div>id</div>
                        <button>프로필편집</button>
                    </div>
                    <div className="count">
                        <span>게시물 26</span>
                        <span>팔로워 45</span>
                        <span>팔로우 34</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mypage;
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
                    <div className="myInfo">
                        <img src="../../img/fb_logo.png" />
                        <div className="myId">
                            <p>MyInstaId05</p>
                            <p>새봄</p>
                        </div>
                        <span>전환</span>
                    </div>

                    <div className="recommend">
                        <div className="title">
                            <span>회원님을 위한 추천</span>
                            <span>모두 모기</span>
                        </div>

                        <div className="contents">
                            <img src="../../img/fb_logo.png" />
                            <div className="myId">
                                <p>MyInstaId05</p>
                                <p>회원님을 위한 추천</p>
                            </div>
                            <span>팔로우</span>
                        </div>
                        <div className="contents"></div>
                        <div className="contents"></div>
                        <div className="contents"></div>
                        <div className="contents"></div>
                    </div>

                    <div className="side_info">
                        <p>소개.도움말.홍보 센터.API.채용정보.개인정보처리방침</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
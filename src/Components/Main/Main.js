import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import './Main.scss';

const Main = () => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api?results=50')
        .then((result) => {
            console.log(result.data)
            setUsers([...result.data])
        })
        .catch(() => {console.log('failure')})
    })

    return (
        <div>
            <Nav />

            <div className="main_container">

                <div className="main_left">
                    
                    <div className="user_container">
                        <ul className="user_lists">
                            {
                                users.map((a,i) => {
                                    return (
                                        <li key={i}>
                                            <div> {a[i]} </div>
                                            <p>users__id</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="feeds">
                        <ul className>
                            {/* feeds 반복문 돌리기(axios로 받아오기) */}
                            <li>
                                <article>
                                    <div className="id_info">
                                        <div>img</div>
                                        <div className="id_info_user">
                                            <p>users__id</p>
                                            <p>location</p>
                                        </div>
                                    </div>

                                    <div className="img_info">
                                        <div>img</div>
                                    </div>

                                    <div className="review_info">
                                        <div className="icons">
                                            <div className="icons_left">
                                                <div className="heart"></div>
                                                <div className="review"></div>
                                                <div className="message"></div>
                                            </div>
                                            <div className="icons_right">
                                                <div className="save"></div>
                                            </div>
                                        </div>

                                        <div className="reviews"></div>

                                        <div className="write">
                                            <input type="text" placeholder="댓글달기.."></input>
                                            <button>게시</button>
                                        </div>
                                    </div>

                                </article>

                            </li>
                        </ul>
                    </div>
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
                        {/* 추천리스트 반복문 돌리기(axios로 받아오기) */}
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
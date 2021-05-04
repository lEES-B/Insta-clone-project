import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import './Main.scss';

const Main = () => {

    let [users, setUsers] = useState([
        {
            name: 'ashley',
            country: 'ireland',
            picture: { large: "https://randomuser.me/api/portraits/men/78.jpg" }
        },
        {
            name: 'billy',
            country: 'ohio',
            picture: { large: "https://randomuser.me/api/portraits/men/78.jpg" }
        }
    ]);
    let [love, setLove] = useState(0);
    let [review, setReview] = useState('')

    useEffect(() => {
        axios.get('https://randomuser.me/api?results=50')
        .then((result) => {
            //console.log(result.data)
            setUsers([...users, ...result.data])
        })
        .catch(() => {console.log('failure')})
    }, [])

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
                                            <img src={users[i].picture.large} />
                                            <p> { users[i].name } </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="feeds">
                        <div className="feeds_form">
                            {
                                users.map((a,i) => {
                                    return (
                                        <div className="feeds_container" key={i}>
                                            <article>
                                                <div className="id_info">
                                                    <img src={users[i].picture.large} />
                                                    <div className="id_info_user">
                                                        <p><strong> { users[i].name } </strong></p>
                                                        <p> { users[i].country } </p>
                                                    </div>
                                                </div>

                                                <div className="img_info">
                                                    <img src= { users[i].picture.large } />
                                                </div>

                                                <div className="review_info">
                                                    <div className="icons">
                                                        <div className="icons_left">
                                                            <div className="heart" onClick={() => {
                                                                setLove(love+1)
                                                            }}></div>
                                                            <div className="review"></div>
                                                            <div className="message"></div>
                                                        </div>
                                                        <div className="icons_right">
                                                            <div className="save"></div>
                                                        </div>
                                                    </div>

                                                    <div className="reviews">
                                                        <p><strong>좋아요 {love}개</strong></p>
                                                        <div className="users_reviews">{ review }</div>
                                                    </div>

                                                    <div className="write">
                                                        <input type="text" placeholder="댓글달기.." onChange={(e) => {
                                                            setReview(e.target.value)
                                                        }} />
                                                        <div className="btn" onClick={() => {
                                                            let reviewCopy = [...review]
                                                            let inputCopy = review;
                                                            reviewCopy.unshift(inputCopy)
                                                            setReview(reviewCopy)
                                                        }}>게시</div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    )
                                })
                                
                            }
                        </div>
                    </div>
                </div>

                <div className="main_right">
                    <div className="myInfo">
                        <div className="myImg"></div>
                        <div className="myId">
                            <p><strong>MyInstaId05</strong></p>
                            <p className="myName">새봄</p>
                        </div>
                        <span>전환</span>
                    </div>

                    <div className="recommend">
                        <div className="title">
                            <span>회원님을 위한 추천</span>
                            <span className="all">모두 보기</span>
                        </div>

                        <div className="contents">
                            {
                                users.map((a,i) => {
                                    return (
                                        <div className="user_contents">
                                            <img src={users[i].picture.large} />
                                            <div className="myId">
                                                <p> <strong>{users[i].name}</strong> </p>
                                                <p>회원님을 위한 추천</p>
                                            </div>
                                            <span>팔로우</span>
                                        </div>
                                    )
                                })
 
                            }
                        </div>
       
                    </div>

                    <div className="side_info">
                        <p>소개.도움말.홍보 센터.API.채용정보.<br />
                        개인정보처리방침.약관.위치.인기계정.해시태그.언어</p>
                        <p>2021 INSTAGRAM FROM FACEBOOK</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
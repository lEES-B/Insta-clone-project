import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import './Main.scss';
import { connect } from 'react-redux';

const Main = (props) => {

    let [feed, setFeed] = useState([
        { 
            poster_path: "/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg",       
        }
    ]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1')
            .then((result) => {
                console.log(result.data.results) // arr 20개

                setFeed(result.data.results)
            })
            .catch(() => { console.log('failure') })

    }, [])

    let [love, setLove] = useState(0);
    let [review, setReview] = useState('');

    console.log(feed)
    return (
        <div>
            <Nav />
            <div className="main_container">
                <div className="main_left">
                    
                    <div className="user_container">
                        <div className="user_lists">
                            {
                                props.users.map((a,i) => {
                                    return (
                                        <div key={i}>
                                            <img src={props.users[i].picture.large} />
                                            <p> { props.users[i].name.last } </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="feeds">
                        {
                            props.users.map((a,i) => {
                                return (
                                    <div className="feeds_container" key={i}>
                                        <article>
                                            <div className="id_info">
                                                <img src={props.users[i].picture.large} />
                                                <div className="id_info_user">
                                                    <p><strong> { props.users[i].name.last } </strong></p>
                                                    <p> { props.users[i].location.country } </p>
                                                </div>
                                            </div>

                                            <div className="img_info">
                                                <img src= {"https://image.tmdb.org/t/p/w1280" + feed[0].poster_path} />
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

                                                <form className="write">
                                                    <input type="text" placeholder="댓글 달기.." onChange={(e) => {
                                                        setReview(e.target.value)
                                                    }} />
                                                    <div className="smile"></div>
                                                    <button className="btn" onClick={() => {
                                                        let reviewCopy = [...review]
                                                        let inputCopy = review;
                                                        reviewCopy.unshift(inputCopy)
                                                        setReview(reviewCopy)
                                                    }} type="submit">게시</button>
                                                </form>
                                            </div>
                                        </article>
                                    </div>
                                )
                            })                              
                        }
                    </div>
                </div>

                <div className="main_right">
                    <div className="myInfo">
                        <img  src={ props.state.myImage } />
                        <div className="myId">
                            <p><strong> {props.state.myId} </strong></p>
                            <p className="myName">{props.state.myName}</p>
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
                                props.users.map((a,i) => {
                                    return (
                                        <div className="user_contents" key={i}>
                                            <img src={props.users[i].picture.large} />
                                            <div className="myId">
                                                <p> <strong>{props.users[i].name.last}</strong> </p>
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

function stateToProps(state) {
    return {
        state: state.reducer,
        users: state.reducer2
    }
}
export default connect(stateToProps)(Main); 


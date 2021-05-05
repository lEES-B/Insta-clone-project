import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import './Mypage.scss';
import { connect } from 'react-redux';


const Mypage = (props) => {

    let [posts, setPosts] = useState(101);
    let [follower, setFollower] = useState(307);
    let [follow, setFollow] = useState(711)
    let [data, setData] = useState();
    //console.log(data)

    useEffect(() => {
        axios.get('https://randomuser.me/api?results=50')
            .then((result) => {
                console.log(result.data)
            })
            .catch(() => {console.log('failure')})
    })

    return (
        <div className="mypage">
            <Nav />

            <div className="profile">
                <div className="profile_img">
                    <img src={props.state.myImage} />
                </div>

                <div className="profile_contents">
                    <div className="profile_id">
                        <h2> {props.state.myId} </h2>
                        <button>프로필편집</button>
                    </div>
                    <ul className="count">
                        <li> 게시물 <strong>{ posts }</strong> </li>
                        <li> 팔로워 <strong>{ follower }</strong> </li>
                        <li> 팔로우 <strong>{ follow }</strong> </li>
                    </ul>
                    <p> {props.state.myName} </p>
                </div>
            </div>

            <div className="category">
                <ul>
                    <li>
                        <span className="post"></span>
                        <span>게시물</span>
                    </li>
                    <li>
                        <span className="igtv"></span>
                        <span>IGTV</span>
                    </li>
                    <li>
                        <span className="save"></span>
                        <span>저장됨</span>
                    </li>
                    <li>
                        <span className="tag"></span>
                        <span>태그됨</span>
                    </li>
                </ul>
            </div>

            <div className="feeds">
                {/* {
                    data.map((a, i) => {
                        return (
                            <div className="feed_line">
                                <div> {a[i]} </div>
                                <div></div>
                                <div></div>
                            </div>
                        )
                    }) 
                }*/}
            </div>
        </div>
    );
};

function stateToProps(state) {
    return {
        state: state.reducer
    }
}
export default connect(stateToProps)(Mypage); 
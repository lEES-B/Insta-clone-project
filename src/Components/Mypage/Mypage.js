import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import './Mypage.scss';
import { connect } from 'react-redux';


const Mypage = (props) => {

    // let [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get('https://randomuser.me/api?results=50')
    //         .then((result) => {
    //             console.log(result.data.results)  
    //             let copy = data;
    //             copy.push(result.data.results);
    //             setData(copy)
    //         })
    //         .catch(() => {console.log('failure')})
    // })

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
                        <li> 게시물 <strong>101</strong> </li>
                        <li> 팔로워 <strong>307</strong> </li>
                        <li> 팔로우 <strong>711</strong> </li>
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
                {
                    props.feed.map((a, i) => {
                        return (
                            <div key={i}>
                            {
                                (i % 3 === 0) && (i !== 0)
                                ? ( <p>
                                        <img className="feednext" src={props.feed[i].picture.medium} />
                                    </p>)
                                : ( <img className="feed" src={props.feed[i].picture.medium} /> )
                            }  
                            </div>
                        );
                    }) 
                }
            </div>
        </div>
    );
};

function stateToProps(state) {
    return {
        state: state.reducer,
        feed: state.reducer2
    }
}
export default connect(stateToProps)(Mypage); 
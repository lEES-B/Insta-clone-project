import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className="login">
            <div className="signin">
                <h1>Instagram</h1>

                <div className="info">
                    <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                    <input type="password" placeholder="비밀번호" />
                    <button>로그인</button>
                </div>

                <div className="or">
                    <div className="line"></div>
                    <p>또는</p>
                    <div className="line"></div>
                </div>

                <div className="fbLogin">
                    <div>
                        <span></span>
                        <p className="fb"> Facebook으로 로그인 </p>
                    </div>
                    <p>비밀번호를 잊으셨나요?</p>
                </div>
            </div>

            <div className="signup">
                <span> 계정이 없으신가요? </span>
                <Link to='/signup' className="signupBtn">가입하기</Link>
            </div>
        </div>
    );
};


export default Login;
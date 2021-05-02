import React from 'react';
import './Login.scss';

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
                    <p className="fb">
                        <img src="../image/fb_logo.png" />
                        Facebook으로 로그인
                    </p>
                    <p>비밀번호를 잊으셨나요?</p>
                </div>
            </div>

            <div className="signup">
                <p>계정이 없으신가요? 가입하기</p>
            </div>
        </div>
    );
};


export default Login;
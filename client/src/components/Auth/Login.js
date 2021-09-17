import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/auth/login', { email, password })
            await localStorage.setItem('user', JSON.stringify(res.data))
            window.location.href = "/"
        } catch (error) {

        }
    }
    return (

        <div className="login">
            <div className="login__heading">
                <img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30" alt="" />
                <div>
                    <Link to="/">
                        <button className={`btn__login ${window.location.pathname === '/' ? 'btn__login--active' : ''}`}>Đăng nhập</button>
                    </Link>
                    <Link to="/register">
                        <button className={`btn__login ${window.location.pathname === '/register' ? 'btn__login--active' : ''}`}>Đăng kí</button>
                    </Link>
                </div>

            </div>

            <div className="form" >
                <div className="form__heading">Đăng nhập</div>
                <input type="text" name="email" placeholder="Nhập email của bạn" onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="Nhập password" onChange={e => setPassword(e.target.value)} />
                <div className="policy__term">Nếu bạn đồng ý với
                    <span> Điều khoản dịch vụ</span> & <span>Chính sách</span> của Netflix hãy đăng nhập
                </div>
                <button onClick={onSubmit} className="btn__submit">Đăng nhập</button>
            </div>

        </div>

    );
}

export default Login;

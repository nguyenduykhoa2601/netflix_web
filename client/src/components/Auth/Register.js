import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UtilModal from '../utils/Modal/Modal';
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [modal, setModal] = useState(false)
    const [textModal, setTextModal] = useState('')
    const [typeModal, setTypeModal] = useState()
    const ModalNofity = (text, type) => {
        if (modal) {
            setTimeout(() => {
                setModal(!modal)
            }, 2000)
            return <UtilModal state={modal} text={text} type={type} />
        }
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/auth/register', { username, email, password })
            await setModal(true)
            await setTextModal('Đăng kí thành công')
            await setTypeModal(true)
            window.location.href = "/"
       
        } catch (error) {
            await setModal(true)
            await setTextModal('Có lỗi xảy ra')
            await setTypeModal(false)
        }
    }

    

    return (

        <div className="login">
            <div className="login__heading">
                <img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30" alt="" />
                <div>
                    <Link to="/">
                        <button className="btn__login">Đăng nhập</button>
                    </Link>
                    <Link to="/register">
                        <button className={`btn__login ${window.location.pathname==='/register'?'btn__login--active':''}`}>Đăng kí</button>
                    </Link>
                </div>
            </div>

            <div className="form" >
                <div className="form__heading">Đăng kí</div>
                <input type="text" name="username" placeholder="Nhập tên của bạn" onChange={e => setUsername(e.target.value)} />
                <input type="text" name="email" placeholder="Nhập email" onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="Nhập password" onChange={e => setPassword(e.target.value)} />
                <div className="policy__term">Nếu bạn đồng ý với
                    <span> Điều khoản dịch vụ</span> & <span>Chính sách</span> của Netflix hãy đăng nhập
                </div>
                <button onClick={onSubmit} className="btn__submit">Đăng kí</button>
            </div>
            {
            ModalNofity(textModal,typeModal)
            }
        </div>
        

    );
}

export default Register;

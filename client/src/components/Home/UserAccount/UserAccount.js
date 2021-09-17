import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import UtilModal from '../../utils/Modal/Modal';
import './user.css'
const UserAccount = () => {
    const state = useContext(GlobalState)
    const [user] = state.user
    const [isEditName, setIsEditName] = useState(false)
    const [isEditEmail, setIsEditEmail] = useState(false)
    const [isEditPassword, setIsEditPassword] = useState(false)
    const [username, setUsername] = useState("")
    const [modal, setModal] = useState(false)
    const [textModal, setTextModal] = useState('')
    const [typeModal, setTypeModal] = useState()
    const [email,setEmail] = useState('')
    const [password,setPassword]= useState('')
    const [password1,setPassword1] = useState('')
    const ModalNofity = (text, type) => {

        if (modal) {
            setTimeout(() => {
                setModal(!modal)
            }, 1000)
            return <UtilModal state={modal} text={text} type={type} />
        }
    }


    const handleChange = (e) => {
        const value = e.target.value
        if(isEditName){
            setUsername({ ...username, username: value })
        }
        if (isEditEmail){
            setEmail({...email,email:value})
        }
        if (isEditPassword){
            setPassword({...password,password:value})
          
        }
    }
    const handleChangePass = (e)=>{
        const value = e.target.value
        if (isEditPassword){
            setPassword1({...password1,password1:value})
          
        }
    }
    const handleSubmitName = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`/users/${user._id}`, username, {
                headers: {
                    token: `Bearer ${user.accessToken}`
                }
            })
            await localStorage.setItem('user', JSON.stringify(res.data))
            await setModal(true)
            await setTextModal('Cập nhật thành công. Vui lòng đăng nhập lại!!!')
            await setTypeModal(true)
            setTimeout(()=>{
                window.location.href = "/"
            },1000)
           
        } catch (error) {
            await setModal(true)
            await setTextModal('Có lỗi xảy ra !! ')
            await setTypeModal(false)
        }
    }


    const handleSubmitEmail = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`/users/${user._id}`, email, {
                headers: {
                    token: `Bearer ${user.accessToken}`
                }
            })
            await localStorage.setItem('user', JSON.stringify(res.data))
            await setModal(true)
            await setTextModal('Cập nhật thành công. Vui lòng đăng nhập lại!!!')
            await setTypeModal(true)
            setTimeout(()=>{
                window.location.href = "/"
            },1000)
           
        } catch (error) {
            await setModal(true)
            await setTextModal('Có lỗi xảy ra !! ')
            await setTypeModal(false)
        }
    }


    const handleSubmitPassword = async (e) => {
        e.preventDefault()
        try {
            if (password.password === password1.password1){
                const res = await axios.put(`/users/${user._id}`, password, {
                    headers: {
                        token: `Bearer ${user.accessToken}`
                    }
                })
                await localStorage.setItem('user', JSON.stringify(res.data))
                await setModal(true)
                await setTextModal('Cập nhật thành công. Vui lòng đăng nhập lại!!!')
                await setTypeModal(true)
                setTimeout(()=>{
                    window.location.href = "/"
                },1000)
            }
            else{
                await setModal(true)
                await setTextModal('Mật khẩu không trùng khớp!!')
                await setTypeModal(false)
            }
            
           
        } catch (error) {
            await setModal(true)
            await setTextModal('Có lỗi xảy ra !! ')
            await setTypeModal(false)
        }
    }


    return (
        <div className="user__account">
            <Link to="/" className="user__account-back">
                <img src="https://vn-live-03.slatic.net/p/1216f1eed179969966e961445fd32fc8.png" alt="" />
            </Link>
            <div className="user__account-heading">
                Thông tin tài khoản
            </div>
            <div className="user__account-body">
               
                <table>
                    <tbody>
                        <tr>
                            <td className="user__account-type">Tên người dùng <span>:</span></td>
                            <td className="user__account-value">
                                {user.username} <br />
                                {
                                    isEditName && <input type="text" placeholder="Nhập tên?" name="username" onChange={handleChange} />
                                }

                            </td>
                            <td className="user__account-action">
                                <div onClick={() => setIsEditName(!isEditName)}>
                                    <i className="fas fa-pen"></i>
                                    <span>{isEditName?'Đóng' :'Thay đổi'}</span>
                                </div>
                                {
                                    isEditName && <button onClick={handleSubmitName}>Cập nhật</button>
                                }


                            </td>
                        </tr>
                        <tr>
                            <td className="user__account-type">Email đăng kí <span>:</span></td>
                            <td className="user__account-value">
                                {user.email}<br />
                                {
                                    isEditEmail && <input type="text" placeholder="Nhập email?" name="email" onChange={handleChange} />
                                }

                            </td>
                            <td className="user__account-action">
                                <div onClick={() => setIsEditEmail(!isEditEmail)}>
                                    <i className="fas fa-pen"></i>
                                    <span >{isEditEmail?'Đóng' :'Thay đổi'}</span>
                                </div>
                                {
                                    isEditEmail && <button onClick={handleSubmitEmail} >Cập nhật</button>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="user__account-type">Mật khẩu <span>:</span></td>
                            <td className="user__account-value">
                                *********** <br />
                                {
                                    isEditPassword &&
                                    <>
                                        <input type="text" placeholder="Nhập mật khẩu mới" name="password" onChange={handleChange}/>
                                        <br />
                                        <input type="text" placeholder="Nhập lại mật khẩu" name="password1" onChange={handleChangePass}
                                        />
                                    </>
                                }

                            </td>
                            <td className="user__account-action">
                                <div onClick={() => setIsEditPassword(!isEditPassword)}>
                                    <i className="fas fa-pen"></i>
                                    <span > {isEditPassword?'Đóng' :'Thay đổi'}</span>
                                </div>
                                {
                                    isEditPassword && <button onClick={handleSubmitPassword} >Cập nhật</button>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="user__account-type">Ngày đăng kí <span>:</span></td>
                            <td className="user__account-value">{user.createdAt}</td>
                        </tr>
                        <tr>
                            <td className="user__account-type">Cập nhật lần cuối <span>:</span></td>
                            <td className="user__account-value">{user.updatedAt}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="policy">
                    <div className="policy__heading">
                        Chính sách của NetFlix
                    </div>
                    <ul className="policy__body">
                        <li>Chính sách phát triển và bảo trì</li>
                        <li>Quy trình thay đổi</li>
                        <li>Kế hoạch cho dự án</li>
                        <li>Xây dựng thêm nhiều nền tảng</li>
                        <li>Bảo mật và phát triển</li>
                        <li>Tối ưu trải nghiệm người dùng</li>
                        <li>Phim hay, chất lượng</li>
                        <li>Hướng đến mục tiêu chung</li>
                        <li>Xây App trong tương lai</li>
                        <li>Thanh toán đa dạng, phong phú</li>
                    </ul>
                </div>
            </div>
            {ModalNofity(textModal, typeModal)}
        </div>
    );
}

export default UserAccount;

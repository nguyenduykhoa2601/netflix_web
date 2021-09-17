import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import './header.css';

const Header = () => {
    const state = useContext(GlobalState)
    const [inputSearch, setInputSearch] = useState(false)
    const [search, setSearch] = state.moviesAPI.search
    const [user] = state.user
    const logOut = async () => {
        await localStorage.removeItem('user')

        window.location.href = "/"

    }
    
    
    return (
        <div className="header" >
            <i className="header-bars fas fa-bars" ></i>
            <div className="menu"  >
                <i className="close__menu fas fa-times" ></i>
                <ul className="list__menu" >
                    <li className="list__menu-logo">
                        <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt=""></img>
                    </li>
                    <li className="list__menu-item">
                        <Link to="/" style={{ color: 'white', textDecoration: "none" }} >
                            Trang chủ
                        </Link>

                    </li>
                    <li className="list__menu-item">Phim truyền hình</li>
                    <li className="list__menu-item">Phim</li>
                    <li className="list__menu-item">Mới và Phổ biến</li>
                </ul>
                <ul className="list__menu"  >
                    <li className="list__menu-item">
                        {
                            inputSearch ?
                                <div className="inputSearch">
                                    <i className="fas fa-search" onClick={() => setInputSearch(false)}></i>
                                    <input className="list__menu-search" placeholder="Nhập tên phim?" name="search" onChange={(e) => setSearch(e.target.value)} />
                                </div>
                                :
                                <i className="fas fa-search" onClick={() => setInputSearch(true)}></i>

                        }


                    </li>
                    <li className="list__menu-item list__menu-text">{user.username}</li>
                    <li className="list__menu-item">
                        <img src="https://i.pinimg.com/736x/b3/d1/7a/b3d17a6384736431a203c0935da4b2d8.jpg" alt="" />
                    </li>
                    <li className="list__menu-item ">
                        <i className="list__menu-user-icon fas fa-sort-down">
                            <ul className="list__menu-user">
                                <Link to="/user" className="list__menu-link">
                                    <li>
                                        Thông tin tài khoản
                                    </li>
                                </Link>

                                <li>
                                    <a className="list__menu-link" href="https://www.facebook.com/profile.php?id=100019330931407">
                                        Chính sách hỗ trợ
                                    </a>
                                </li>

                                <li onClick={logOut}>Đăng xuất</li>
                            </ul>
                        </i>
                    </li>


                </ul>
            </div>

        </div>
    );
}

export default Header;

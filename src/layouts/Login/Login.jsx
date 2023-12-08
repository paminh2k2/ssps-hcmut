import { Button, Input } from "antd";
import classNames from "classnames/bind";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterUser from '../../component/FooterUser';
import styles from './Login.module.scss';

const cx = classNames.bind(styles)

const users = [
    {
        username: 2013782,
        password: 'abcdefgh',
        role: 'student'
    },
    {
        username: 8888888,
        password: 'abcdefgh',
        role: 'admin'
    }
]

function Login({userid}) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');


    const handleInputUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    }
    const navigate = useNavigate();

    const handleLoginNavigate = (navigate) => {
        const user = users.find((u) => u.username === parseInt(username) && u.password === password);

        if (user) {
            if (user.role === 'admin') {
                // Chuyển hướng đến trang admin
                navigate('/admin');
            } else if (user.role === 'student') {
                // Chuyển hướng đến trang người dùng và truyền thông tin người dùng qua URL
                navigate(`/user/${user.username}`);
            }
        } else {
            // Hiển thị thông báo lỗi hoặc thực hiện các xử lý khác khi đăng nhập sai
            alert('Thông tin đăng nhập sai!')
        }
    }

    const handleLogin =() =>{
        handleLoginNavigate(navigate)
    }


    return(
    <div className={cx('wrapper')}>
        <header className={cx('header')} >
            <ul className={cx('header-list')}>
                <li className={cx('header-item')}>Giới thiệu</li>
                <li className={cx('header-item')}>Liên hệ</li>
            </ul>
        </header>
        <div
        className={cx('body')}>
            <h1 className={cx('body-title')}>Đăng Nhập</h1>    
            <div className={cx('input-box')}>
                <span className={cx('input-title')}>Tên tài khoản</span>
                <Input className={cx('input-field')} onChange={handleInputUsername}/>
                <span className={cx('input-title')}>Mật khẩu</span>
                <Input.Password className={cx('input-field')} onChange={handleInputPassword}/>
            </div>
            <Button type="primary" className={cx('btn-login')} onClick={handleLogin}>
            Đăng nhập
            </Button>
            <p className={cx('forgot-password')}>Quên mật khẩu ?</p>
        </div>
        <FooterUser/>
    </div>

    );
}

export default Login;
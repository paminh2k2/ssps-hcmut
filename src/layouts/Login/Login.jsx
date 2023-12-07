import { Button, Input } from "antd";
import classNames from "classnames/bind";
import { useState } from "react";
import FooterUser from '../../component/FooterUser';
import styles from './Login.module.scss';

const cx = classNames.bind(styles)

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleInputUsername = (e) => {
        return setUsername(e.target.value)
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
                <Input className={cx('input-field')}/>
                <span className={cx('input-title')}>Mật khẩu</span>
                <Input.Password className={cx('input-field')}/>
            </div>
            <Button type="primary" className={cx('btn-login')} >
            Đăng nhập
            </Button>
            <p className={cx('forgot-password')}>Quên mật khẩu ?</p>
        </div>
        <FooterUser/>
    </div>

    );
}

export default Login;
import { Button } from "antd";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Header.module.scss';

const cx = classNames.bind(styles)

function HeaderUser() {
    return(<div className={cx('wrapper')} >
        <div className={cx('container')}>
         <ul className={cx('header-list')}>
            <li className={cx('header-item')}>Giới thiệu</li>
            <li className={cx('header-item')}>Liên hệ</li>
            <li className={cx('header-item')}>Thông báo</li>
        </ul>
        <Link to ={'/'}>
            <Button type="primary" className={cx('logout-btn')}>Logout</Button>
        </Link>
        </div>
    </div>)
}

export default HeaderUser;
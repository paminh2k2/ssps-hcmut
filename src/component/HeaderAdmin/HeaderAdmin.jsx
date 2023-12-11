import { LogoutOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderAdmin.module.scss';

const cx = classNames.bind(styles);


function HeaderAdmin() {
    const [current, setCurrent] = useState();
    const onClick = (e) => {
        setCurrent(e.key);
    };


    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container-functinonal')}>
                    <div className={cx('functional')}>
                        <Link to ={'/admin'}>
                            <span className={cx('menu-header')}>Quản lí người dùng</span>
                        </Link>
                        <Link to ={'/admin/printer'}>
                            <span className={cx('menu-header')}>Quản lí máy in</span>
                        </Link>

                        <Link to ={'/admin/config-system'}>
                            <span className={cx('menu-header')}>Cấu hình hệ thống</span>
                        </Link>
                    </div>
                </div>
                <div className={cx('container-admin')}>
                    <span className={cx('title')}>Xin chào, Toàn</span>
                    
                    <Link to={'/'}>
                        <LogoutOutlined  className={cx('icon')}/>
                    </Link>
                </div>
            </div>
        </div>
    )  
}

export default HeaderAdmin; 
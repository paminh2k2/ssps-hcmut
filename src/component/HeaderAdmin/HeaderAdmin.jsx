import { LogoutOutlined } from '@ant-design/icons';
import { Menu, Select } from 'antd';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderAdmin.module.scss';

const cx = classNames.bind(styles);

const items = [
    {
        label: 'Manage User',
        key: 1,
    },
    {
        label: 'Home Admin',
        key: 2,
    },]

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
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className={cx('custom-menu')}/>
                    </div>
                </div>
                <div className={cx('container-admin')}>
                    <span className={cx('title')}>Welcome, Toan</span>
                    <Select
                    defaultValue="EN"
                    className={cx('lenguage')}
                    options={[{ value: 'EN', label: 'EN' },{ value: 'VI', label: 'VI' }]}
                    />
                    <Link to={'/'}>
                        <LogoutOutlined  className={cx('icon')}/>
                    </Link>
                </div>
            </div>
        </div>
    )  
}

export default HeaderAdmin; 
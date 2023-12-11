import { Button } from "antd";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import admin from '../../data/admin.json';
import styles from './HomeAdmin.module.scss';

const cx = classNames.bind(styles)

function HomeAdmin() {
    return ( 
    <div className={cx('wrapper')}>
        
        <h1 className={cx('role')}>{`ADMIN PANEL`}</h1>

        <div className={cx('container')}>
            <div className={cx('container-left')}> 
                <span className={cx('container-content')}>{`Tổng số lần in ấn: ${admin[0].printing}`}</span>
                <span className={cx('container-content')}>{`Số máy in đang hoạt động: ${admin[0].countprinters}`}</span>
            </div>
            <div className={cx('container-right')}>
            <span className={cx('container-content')}>{`Số trang đã được in trong hôm nay: ${admin[0].countpages}`}</span> 
            </div>
        </div>
        <div className={cx('function')}>
            <Link to = {'config-system'}>
                <Button className={cx('function-btn')}>Cấu hình hệ thống</Button>
            </Link>
            <Link to = {'printer'}>
                <Button className={cx('function-btn')}>Máy in</Button>
            </Link>
            <Link to = {'log'}>
                <Button className={cx('function-btn')}>Lịch sử in</Button>
            </Link>
        </div>

    </div>
    ); 
}

export default HomeAdmin;
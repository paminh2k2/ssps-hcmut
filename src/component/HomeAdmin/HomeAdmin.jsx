import { Button } from "antd";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './HomeAdmin.module.scss';

const cx = classNames.bind(styles)

function HomeAdmin({printing, countprinters, countpages}) {
    return ( 
    <div className={cx('wrapper')}>
        
        <h1 className={cx('role')}>{`ADMIN PANEL`}</h1>

        <div className={cx('container')}>
            <div className={cx('container-left')}> 
                <span className={cx('container-content')}>{`Total Printing Activities: ${printing}`}</span>
                <span className={cx('container-content')}>{`Active Printer: ${countprinters}`}</span>
            </div>
            <div className={cx('container-right')}>
            <span className={cx('container-content')}>{`Today Pages Printed: ${countpages}`}</span> 
            </div>
        </div>
        <div className={cx('function')}>
            <Link to = {'/config-system'}>
                <Button className={cx('function-btn')}>Cấu hình hệ thống</Button>
            </Link>
            <Link to = {'/printer'}>
                <Button className={cx('function-btn')}>Máy in</Button>
            </Link>
            <Link to = {'/log'}>
                <Button className={cx('function-btn')}>Lịch sử in</Button>
            </Link>
        </div>

    </div>
    ); 
}

export default HomeAdmin;
import { Button } from "antd";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './HomeUser.module.scss';

const cx = classNames.bind(styles)

function HomeUser({fullname, countpages, countprints, filename, dateprint}) {
    return ( 
    <div className={cx('wrapper')}>
        <h1 className={cx('title')}>{`XIN CHÀO, ${fullname}`}</h1>
        <div className={cx('container')}>
            <div className={cx('container-left')}>
                <span className={cx('container-content')}>{`Số trang hiện có: ${countpages}`}</span>
                <span className={cx('container-content')}>{`Lần in gần nhất: ${dateprint}`}</span>
            </div>
            <div className={cx('container-right')}>
            <span className={cx('container-content')}>{`Số trang đã in: ${countprints}`}</span>
            <span className={cx('container-content')}>{`Tệp in gần nhất: ${filename}`}</span>
            </div>
        </div>
        <div className={cx('function')}>
            <Link to = {'/print'}>
                <Button className={cx('function-btn')}>IN ẤN</Button>
            </Link>
            <Link to={'/buy-pages'}>
                <Button className={cx('function-btn')}>MUA TRANG</Button>
            </Link>
            <Link to={'/log'}>
                <Button className={cx('function-btn')}>LỊCH SỬ IN</Button>
            </Link>
            <Link >
                <Button className={cx('function-btn')}>MÁY IN</Button>   
            </Link>
        </div>
    </div>
    );
}

export default HomeUser;
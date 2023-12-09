import { FacebookOutlined, InstagramFilled, PhoneFilled, ShopFilled, YoutubeFilled } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function FooterUser() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container-first')}>
                    <h2 className={cx('logo')}>BK-SSPS</h2>
                    <span className={cx('email')}>Email: toan.nguyenkhactoan432@hcmut.edu.vn</span>
                    <span className={cx('phone')}>Phone number: 0353846079</span>
                </div>
                <div className={cx('container-last')}>
                    <span className={cx('title')}>© 2023. Design by Group</span>
                    <ul className={cx('contact-list')}>
                        <li className={cx('contact-item')}><FacebookOutlined /></li>
                        <li className={cx('contact-item')}><YoutubeFilled /></li>
                        <li className={cx('contact-item')}><InstagramFilled /></li>
                        <li className={cx('contact-item')}><ShopFilled /></li>
                        <li className={cx('contact-item')}><PhoneFilled /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterUser;
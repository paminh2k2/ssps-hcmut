import { CheckOutlined } from '@ant-design/icons';
import { Button, Card, Input, Select } from "antd";
import classNames from "classnames/bind";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styels from './BuyPages.module.scss';

const cx = classNames.bind(styels);

function BuyPages({countpages, user}) {
    const [count, setCount] = useState(0)
    const [pricepage, setPricePage] = useState(500)
    const [isaccept,setIsAccept] = useState(false)

    const handleValue = (e) => {
        return setCount(e.target.value)
    }

    const handlePricePage = (value) => {
        setPricePage(value)
    }

    const handleOnclick = () => {
        return setIsAccept(!isaccept)
    }


    return (  <div className={cx('wrapper')}>
        <h2 className={cx('header')}>MUA TRANG</h2>
        <div className={cx('body')}>
        { !isaccept ? <>
            <h3 className={cx('header-second')}>{`Số trang hiện có: ${countpages}`}</h3>
            <span className={cx('title')}>Số trang muốn mua</span>
            <Input placeholder="Nhập số lượng..." onChange={handleValue} className={cx('count-input')}/>
            <span className={cx('title')}>Loại giấy</span>
            <Select
                defaultValue="A4"
                style={{ width: 120 }}
                onChange={handlePricePage}
                options={[
                    { value: 500, label: 'A4' },
                    { value: 1000, label: 'A3' },
                ]}
            />
            <span className={cx('note')}>Đơn giá</span>
            <ul className={cx('note-list')}>
                <li>A4: 500đ/tờ</li>
                <li>A3: 1000đ/tờ</li>
            </ul>
            <span>{`Tổng tiền: ${count*pricepage}đ`}</span>
            <div>
                <Button type="primary" className={cx('order-btn')} onClick={handleOnclick} >Tạo đơn</Button>
                <Link to={`/user/${user}`}>
                    <Button  className={cx('back')}>Quay lại</Button>
                </Link>
            </div>
            </>
            : 
            <Card 
            className={cx('card')}
            bodyStyle={{padding:0}}
            >
                <div className={cx('card-top')}>
                    <div className={cx('box-icon')}>
                        <CheckOutlined className  = {cx('icon')} />
                    </div>
                    <div>
                    <span className={cx('card-title')}>Tạo đơn thành công</span><br/>
                    <span>Vui lòng thanh toán trên BKPay</span>
                    </div>
                </div>
                <Button 
                    onClick={handleOnclick}
                    className={cx('card-btn')}
                    >Đóng</Button>

          </Card>
        }
        </div>
    </div>);    
}

export default BuyPages;
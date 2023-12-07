import { Table } from 'antd';
import classNames from "classnames/bind";
import React from 'react';
import styles from './LogBuyPages.module.scss';

const cx = classNames.bind(styles);

const dataSource = [
    {
      key: '1',
      time: '10:58 10/10/2023',
      filename: "Giáo trình tư tưởng hồ chí minh",
      printer: 1,
      count_pages: 138,
    },
    {
        key: '2',
        time: '10:58 10/10/2023',
        filename: "Giáo trình tư tưởng hồ chí minh",
        printer: 1,
        count_pages: 138,
    },
    {
        key: '3',
        time: '10:58 10/10/2023',
        filename: "Giáo trình tư tưởng hồ chí minh",
        printer: 1,
        count_pages: 138,
    },
    {
        key: '4',
        time: '10:58 10/10/2023',
        filename: "Giáo trình tư tưởng hồ chí minh",
        printer: 1,
        count_pages: 138,
    },
  ];
  
  const columns = [
    {
        title: 'Thời gian',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Tên tài liệu',
        dataIndex: 'filename',
        key: 'filename',
    },
    {
        title: 'Máy in',
        dataIndex: 'printer',
        key: 'printer',
    },
    {
        title: 'Số trang in',
        dataIndex: 'count_pages',
        key: 'count_pages',
    },
  ];

function LogBuyPages() {

    return (  <div className={cx('wrapper')}>
        <h2 className={cx('header')}>LỊCH SỬ ĐƠN HÀNG</h2>
        <div className={cx('body')}>
        <Table dataSource={dataSource} columns={columns} className={cx('table')}
         />

        </div>
    </div>);    
}

export default LogBuyPages;
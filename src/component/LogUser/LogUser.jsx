import { Table } from 'antd';
import classNames from 'classnames/bind';
import styles from './LogUser.module.scss';

const cx = classNames.bind(styles)

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
  
  

function LogUser() {

    return ( 
    <div className={cx('wrapper')}>
        <h2 className={cx('title')}>LỊCH SỬ IN ẤN</h2>
        <div className={cx('container')}>
        <Table dataSource={dataSource} columns={columns} className={cx('table-log')} />
        </div>
    </div> 
    );
}

export default LogUser;
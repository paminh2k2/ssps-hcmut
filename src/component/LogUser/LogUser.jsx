import { LeftOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './LogUser.module.scss';
const cx = classNames.bind(styles)

const dataSource = [
    {
      key: '1',
      time: '10:58 10/10/2023',
      filename: "Giáo trình tư tưởng hồ chí minh",
      build: "H1",
      floor: 1,
      count_pages: 138,
    },
    {
        key: '2',
        time: '11:58 10/10/2023',
        filename: "02_Ch2 Software Processes_2023.pdf",
        build: "H1",
        floor: 1,
        count_pages: 45,
    },
    {
        key: '3',
        time: '12:58 10/10/2023',
        filename: "03_Ch3_4 Requirements Engineering_2023.pdf",
        build: "H1",
        floor: 1,
        count_pages: 95,
    },
    {
        key: '4',
        time: '13:58 10/10/2023',
        filename: "05_Ch5_Introduction_OOP_2023.pdf",
        build: "H1",
        floor: 1,
        count_pages: 36,
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
        title: 'Tòa nhà',
        dataIndex: 'build',
        key: 'build',
    },
    {
        title: 'Tầng',
        dataIndex: 'floor',
        key: 'floor',
    },
    {
        title: 'Số trang in',
        dataIndex: 'count_pages',
        key: 'count_pages',
    },
  ];
  
  

function LogUser({user}) {

    return ( 
    <div className={cx('wrapper')}>
        <Link to = {`/user/${user}`}>
        <Button
          className={cx("turnback-btn")}
          type="primary"
          icon={<LeftOutlined />}
        >
        </Button>
        </Link>
        <h2 className={cx('title')}>LỊCH SỬ IN ẤN</h2>
        <div className={cx('container')}>
        <Table dataSource={dataSource} columns={columns} className={cx('table-log')} />
        </div>
    </div> 
    );
}

export default LogUser;
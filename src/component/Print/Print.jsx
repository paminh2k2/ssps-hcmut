import { UploadOutlined } from '@ant-design/icons';
import { Button, Input, Radio, Select, Upload, message } from 'antd';
import classNames from "classnames/bind";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Print.module.scss';




const cx = classNames.bind(styles)


function Print({user}) {
    const [countpage, setCountPage] = useState(1);
    const [kindpage, setKindPage] = useState(1);
    const [ side, setSide] = useState(1);
    const [floor, setFloor] = useState(1)
    const [build,setBuild] = useState('H1')
    const [pagesprint, setPagesPrint] = useState('');
    const [recordnumber,setRecordNumber] = useState(1)
    const [totalpages,setTotalPages] = useState(0);
    const [fileList,setFileList] = useState([]);

  const onChangeRecordNumber = (e) => { 
    setRecordNumber(e.target.value)
  }
  const onChangeCountPage = (e) => {
    setCountPage(e.target.value);
  };
  const onChangeKindPage = (e) => {
    setKindPage(e.target.value);
  };
  const onChangeSide = (e) => {
    setSide(e.target.value);
  };
  const handleChangeBuild = (value) => {
    setBuild(value)
  };
  const handleChangeFloor = (value) => {
    setFloor(value);
  }
  const onChangePagesPrint = (e) => {
    const inputString = e.target.value;
    setPagesPrint(inputString);
    const ranges = inputString.split(',').map(range => range.trim());
    let totalPages = 0;

    ranges.forEach(range => {
    if (range.includes('-')) {
      // Nếu là dạng "a-b"
      const [start, end] = range.split('-').map(Number);
      totalPages += end - start + 1;
    } else {
      // Nếu là số đơn
      totalPages += 1;
    }
    });

    setTotalPages(totalPages);
  }

  

  const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        setFileList(info.fileList)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
    return (
    <div className={cx('wrapper')}>
        <h2 className={cx('title')}>IN TÀI LIỆU</h2>
        <div className={cx('container')}>
            <div className={cx('upload-file')}>
            <Upload {...props} maxCount={1}
            >
                <Button className={cx('upload-btn')} type="primary" icon={<UploadOutlined />} >Upload file</Button>
                <span className={cx('upload-note')}>{"(.doc, .pdf)"}</span>
                </Upload>
            </div>
            <div className={cx('select')}>
                <span className={cx('seclect-title')}>Chọn máy in:</span>
                <Select
                    className={cx('selection')}
                    defaultValue="Chọn tòa"
                    style={{ width: 120 }}
                    onChange={handleChangeBuild}
                    options={[
                        { value: 'H1', label: 'H1' },
                        { value: 'H2', label: 'H2' },
                        { value: 'H3', label: 'H3' },
                        { value: 'H6', label: 'H6' },
                    ]}
                />
                
                <Select
                    className={cx('selection')}
                    defaultValue="Chọn tầng"
                    style={{ width: 120 }}
                    onChange={handleChangeFloor}
                    options={[
                        { value: 1, label: 1 },
                        { value: 2, label: 2 },
                        { value: 3, label: 3 },
                        { value: 4, label: 4 },
                        { value: 5, label: 5 },
                        { value: 6, label: 6 },
                        { value: 7, label: 7 },
                        { value: 8, label: 8 },
                    ]}
                />
            </div>
            <div className={cx('select')}>
                <span className={cx('seclect-title')}>Trang:</span>
                <Radio.Group onChange={onChangeCountPage} value={countpage} className={cx('select-pages')}>
                    <Radio value={1} className={cx('radio-check')}>Tất cả</Radio>
                    <Radio value={2} className={cx('radio-check')}>Chỉ trang chẳn</Radio>
                    <Radio value={3} className={cx('radio-check')}>Chỉ trang lẻ</Radio>
                    <Radio value={4} className={cx('radio-check')}> Tùy chỉnh
                    </Radio>
                    <Input
                        className={cx('select-input')}
                        placeholder="Ví dụ: 1-5, 6, 8-12..."
                        value = {pagesprint}
                        onChange={onChangePagesPrint}
                        />
                    </Radio.Group>
                    {console.log(totalpages)}
            </div>
            <div className={cx('select')}>
                <span className={cx('seclect-title')}>Loại giấy:</span>
                <Radio.Group onChange={onChangeKindPage} value={kindpage} className={cx('select-pages')}>
                    <Radio value={1} className={cx('radio-check')}>A4</Radio>
                    <Radio value={2} className={cx('radio-check')}>A3</Radio>
                </Radio.Group>
            </div>
            <div className={cx('select')}>
                <span className={cx('seclect-title')}>Số mặt:</span>
                <Radio.Group onChange={onChangeSide} value={side} className={cx('select-pages')}>
                    <Radio value={1} className={cx('radio-check')}>2</Radio>
                    <Radio value={2} className={cx('radio-check')}>1</Radio>
                </Radio.Group>
            </div>
            <div className={cx('select-printer')}>
                <span className={cx('seclect-title')}>Số bản:</span>
                <Input
                        className={cx('select-input')}
                        placeholder="Ví dụ: 3"
                        bordered
                        value={recordnumber}
                        onChange={onChangeRecordNumber}
                    />
            </div>
            <div>
            <Button type="primary" className={cx('accept')}>Xác nhận in</Button>
            <Link to={`/user/${user}`}>
              <Button  className={cx('back')}>Quay lại</Button>
            </Link>
            </div>
        </div>
    </div>
    );
}

export default Print;
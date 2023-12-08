import { LeftOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import classNames from "classnames/bind";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import styles from "./LogAdmin.module.scss";

const cx = classNames.bind(styles);

const dataSource = [
  {
    key: "1",
    time: "7:20 10/10/2023",
    filename: "Báo cáo BTL",
    floor: 5,
    building: "H2",
    count_pages: 52,
  },
  {
    key: "2",
    time: "8:51 10/10/2023",
    filename: "Giáo trình LSĐ",
    floor: 4,
    building: "H3",
    count_pages: 138,
  },
  {
    key: "3",
    time: "10:58 10/10/2023",
    filename: "Báo cáo BTL",
    floor: 2,
    building: "H6",
    count_pages: 15,
  },
  {
    key: "4",
    time: "14:22 10/10/2023",
    filename: "Fundamentals_of_Electric_Circuits_6th_Sadiku",
    floor: 6,
    building: "H1",
    count_pages: 990,
  },
  {
    key: "5",
    time: "15:56 10/10/2023",
    filename: "Đề thi môn XSTK",
    floor: 1,
    building: "H2",
    count_pages: 21,
  },
];

const columns = [
  {
    title: "STT",
    dataIndex: "key",
    key: "key",
    width: 10,
  },
  {
    title: "Thời gian",
    dataIndex: "time",
    key: "time",
    width: 200,
  },
  {
    title: "Tên tài liệu",
    dataIndex: "filename",
    key: "filename",
  },
  {
    title: "Tầng",
    dataIndex: "floor",
    key: "floor",
    width: 100,
  },
  {
    title: "Tòa",
    dataIndex: "building",
    key: "building",
    width: 100,
  },
  {
    title: "Số trang in",
    dataIndex: "count_pages",
    key: "count_pages",
    width: 150,
  },
];

function LogAdmin() {
    const username = "Phạm Anh Minh";

    const [userID, setUserID] = useState(2000000);
    const handleUserIDChange = (event) => {
      setUserID(event.target.value);
    };
  
    const [selectedDate, setSelectedDate] = useState(null);
  
    return (
      <div className={cx("wrapper")}>
        <Link to={"/admin"}>
          <Button
            className={cx("turnback-btn")}
            type="primary"
            icon={<LeftOutlined />}
          >
            Quay lại
          </Button>
        </Link>
  
        <h2 className={cx("title")}>LỊCH SỬ IN TOÀN HỆ THỐNG</h2>
  
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <span className={cx("seclect-title")}>MSSV: </span>
            <input
              type="text"
              id="input"
              value={userID}
              className={cx("select-input")}
              placeholder=" VD: 2000000 "
              userID={userID}
              onChange={handleUserIDChange}
            />
            <span className={cx("note")}>Họ và tên: </span>
            <span className={cx("note")}>{username} </span>
          </div>
          <div className={cx("select")}>
            <span className={cx("seclect-title")}>Chọn ngày: </span>
            <DatePicker
              className={cx("selection")}
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MM/dd/yyyy"
            />
          </div>
        </div>
  
        <div className={cx("container")}>
          <Table
            dataSource={dataSource}
            columns={columns}
            className={cx("table-log")}
          />
        </div>
      </div>
    );
}

export default LogAdmin;
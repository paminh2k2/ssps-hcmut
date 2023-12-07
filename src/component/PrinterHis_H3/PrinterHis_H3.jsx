import { Table, Input, Button, Radio, Select } from "antd";
import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./PrinterHis_H3.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const dataSource = [
  {
    key: "1",
    time: "7:20 10/10/2023",
    filename: "Báo cáo BTL",
    count_pages: 52,
  },
  {
    key: "2",
    time: "8:51 10/10/2023",
    filename: "Giáo trình LSĐ",
    count_pages: 138,
  },
  {
    key: "3",
    time: "10:58 10/10/2023",
    filename: "Báo cáo BTL",
    count_pages: 15,
  },
  {
    key: "4",
    time: "14:22 10/10/2023",
    filename: "Fundamentals_of_Electric_Circuits_6th_Sadiku",
    count_pages: 990,
  },
  {
    key: "5",
    time: "15:56 10/10/2023",
    filename: "Đề thi môn XSTK",
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
    title: "Số trang in",
    dataIndex: "count_pages",
    key: "count_pages",
    width: 150,
  },
];

function PrinterHis_H3() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [printerName, setName] = useState("Máy in 1");
  const handleChangeName = (value) => {
    setName(value);
  };

  return (
    <div className={cx("wrapper")}>
      <Link to={"/printer/printerlist_H3"}>
        <Button
          className={cx("turnback-btn")}
          type="primary"
          icon={<LeftOutlined />}
        >
          Quay lại
        </Button>
      </Link>

      <h2 className={cx("title")}>LỊCH SỬ IN ẤN THEO TỪNG MÁY IN Ở H3</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <div className={cx("function_select")}>
          <div className={cx("select")}>
            <span className={cx("seclect-title")}>Chọn ngày: </span>
            <DatePicker
              className={cx("selection")}
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MM/dd/yyyy"
            />
          </div>

          <div className={cx("select")}>
            <span className={cx("seclect-title")}>Chọn tầng: </span>
            <Select
              className={cx("selectPrinter")}
              onChange={handleChangeName}
              options={[
                { value: "Máy in 1", label: "Tầng 1" },
                { value: "Máy in 2", label: "Tầng 2" },
                { value: "Máy in 3", label: "Tầng 3" },
                { value: "Máy in 4", label: "Tầng 4" },
                { value: "Máy in 4", label: "Tầng 5" },
                { value: "Máy in 4", label: "Tầng 6" },
                { value: "Máy in 4", label: "Tầng 7" },
                { value: "Máy in 4", label: "Tầng 8" },
              ]}
            />
          </div>
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

export default PrinterHis_H3;

import { LeftOutlined } from "@ant-design/icons";
import { Button, Select, Table } from "antd";
import classNames from "classnames/bind";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import styles from "./PrinterHis.module.scss";

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

function PrinterHis() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [printerName, setName] = useState("Máy in 1");
  const handleChangeName = (value) => {
    setName(value);
  };

  return (
    <div className={cx("wrapper")}>
      <Link to={"printer"}>
        <Button
          className={cx("turnback-btn")}
          type="primary"
          icon={<LeftOutlined />}
        >
          Quay lại
        </Button>
      </Link>

      <h2 className={cx("title")}>LỊCH SỬ IN ẤN THEO TỪNG MÁY IN Ở CÁC TÒA</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <div className={cx("function_select")} >
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
            <span className={cx("seclect-title")}>Chọn máy in: </span>
            <Select
              className={cx("selectPrinter")}
              onChange={handleChangeName}
              options={[
                { value: "Máy in 1", label: "Máy in 1" },
                { value: "Máy in 2", label: "Máy in 2" },
                { value: "Máy in 3", label: "Máy in 3" },
                { value: "Máy in 4", label: "Máy in 4" },
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

export default PrinterHis;
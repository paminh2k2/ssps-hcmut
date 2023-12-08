import { LeftOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Printer.module.scss";
import printer from "./printer.png";

const cx = classNames.bind(styles);

function Printer() {
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

      <h1 className={cx("title")}>{`MANAGE PRINTER`}</h1>

      <div className={cx("function")}>
        <Link to={"/admin/printerlist_H1"}>
          <Button className={cx("function-btn")}>
            <div className="image-container">
              <img
                src={printer}
                alt="printer"
                style={{ width: "140px", height: "140px" }}
              />
              <div className="image-text">
                <h3>Máy in ở H1</h3>
              </div>
            </div>
          </Button>
        </Link>

        <Link to={"/admin/printerlist_H2"}>
          <Button className={cx("function-btn")}>
            <div className="image-container">
              <img
                src={printer}
                alt="printer"
                style={{ width: "140px", height: "140px" }}
              />
              <div className="image-text">
                <h3>Máy in ở H2</h3>
              </div>
            </div>
          </Button>
        </Link>

        <Link to={"/admin/printerlist_H3"}>
          <Button className={cx("function-btn")}>
            <div className="image-container">
              <img
                src={printer}
                alt="printer"
                style={{ width: "140px", height: "140px" }}
              />
              <div className="image-text">
                <h3>Máy in ở H3</h3>
              </div>
            </div>
          </Button>
        </Link>

        <Link to={"/admin/printerlist_H6"}>
          <Button className={cx("function-btn")}>
            <div className="image-container">
              <img
                src={printer}
                alt="printer"
                style={{ width: "140px", height: "140px" }}
              />
              <div className="image-text">
                <h3>Máy in ở H6</h3>
              </div>
            </div>
          </Button>
        </Link>
      </div>

      <div className={cx("function")}>
        <Button
          className={cx("add-btn")}
          type="primary"
          icon={<PlusOutlined />}
        >
          Thêm vị trí
        </Button>
      </div>
    </div>
  );
}

export default Printer;
import { LeftOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import styles from "./PrinterList_H3.module.scss";
import printer from "./printer.png";

const cx = classNames.bind(styles);

function PrinterList_H3() {
  const [showFrame, setShowFrame] = useState(false);
  const [floor, setFloor] = useState("");
  const [printerName, setPrinterName] = useState("");

  const showAddFrame = () => {
    setShowFrame(true);
  };

  const hideAddFrame = () => {
    setShowFrame(false);
  };

  const confirmAddition = () => {
    const confirmation = window.confirm(`Bạn chắc chắn muốn thêm máy in?`);
    if (confirmation) {
      alert("Đã thêm thành công.");
    } else {
      hideAddFrame();
    }
  };

  return (
    <div className={cx("wrapper")}>
      <Link to={"/admin/printer"}>
        <Button
          className={cx("turnback-btn")}
          type="primary"
          icon={<LeftOutlined />}
        >
          Quay lại
        </Button>
      </Link>

      <h1 className={cx("title")}>{`DANH SÁCH MÁY IN Ở H3`}</h1>

      <div className={cx("function")}>
        <div>
          <div className="image-container">
            <img
              src={printer}
              alt="printer"
              style={{ width: "140px", height: "140px" }}
            />
            <div className="image-text">
              <h3>Máy in ở tầng 1</h3>
            </div>
          </div>

          <div>
            <ToggleSwitch> </ToggleSwitch>
          </div>

          <div className={cx("function")}>
            <Link to={"/admin/printerhis_H3"}>
              <Button className={cx("viewHis-btn")} type="primary">
                Xem lịch sử
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <div className="image-container">
            <img
              src={printer}
              alt="printer"
              style={{ width: "140px", height: "140px" }}
            />
            <div className="image-text">
              <h3>Máy in ở tầng 2</h3>
            </div>
          </div>

          <div>
            <ToggleSwitch> </ToggleSwitch>
          </div>

          <div className={cx("function")}>
            <Link to={"/admin/printerhis_H3"}>
              <Button className={cx("viewHis-btn")} type="primary">
                Xem lịch sử
              </Button>
            </Link>
          </div>
        </div>

        <div>
          {" "}
          <div className="image-container">
            <img
              src={printer}
              alt="printer"
              style={{ width: "140px", height: "140px" }}
            />
            <div className="image-text">
              <h3>Máy in ở tầng 3</h3>
            </div>
          </div>
          <div>
            <ToggleSwitch> </ToggleSwitch>
          </div>
          <div className={cx("function")}>
            <Link to={"/admin/printerhis_H3"}>
              <Button className={cx("viewHis-btn")} type="primary">
                Xem lịch sử
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className={cx("container")}>
        <Button
          onClick={showAddFrame} 
          className={cx("add-btn")} 
          type="primary"
          icon={<PlusOutlined />}
        >
          Thêm máy in
        </Button>

        {showFrame && (
          <div className={cx("overlay")}>
            <div className={cx("add-frame")}>
              <question>Bạn muốn thêm máy in tại tầng nào? </question>
              <label htmlFor="floorInput">Nhập tầng: </label>
              <input
                type="text"
                id="floorInput"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
              />
              <br />

              <label htmlFor="nameInput">Nhập tên máy in: </label>
              <input
                type="text"
                id="nameInput"
                value={printerName}
                onChange={(e) => setPrinterName(e.target.value)}
              />
              <br />

              <div className={cx("button-container")}>
                <Button className={cx("add-button")} onClick={confirmAddition}>
                  Thêm
                </Button>
                <Button className={cx("cancel-button")} onClick={hideAddFrame}>
                  Thoát
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PrinterList_H3;

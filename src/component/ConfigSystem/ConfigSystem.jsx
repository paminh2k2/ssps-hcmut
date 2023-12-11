import classNames from "classnames/bind";
import React, { useState } from "react";
import CalendarConfig from "../CalendarConfig";
import styles from './ConfigSystem.module.scss';

const cx = classNames.bind(styles)


function ConfigSystem() {

    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
      });
      const handleCheckboxChange = (checkboxName) => {
        setCheckboxes((prevCheckboxes) => ({
          ...prevCheckboxes,
          [checkboxName]: !prevCheckboxes[checkboxName],
        }));
      };
      const [numvalue, setValue] = useState(0);
        const handleChange = event => {
            setValue(event.target.value);
        };
      const [showNoti, setShowDiv1] = useState(0);
      const handleSave = () => {
        const al1checked = Object.values(checkboxes).some((value) => value);
        const numbervalue=numvalue > 0 ? 1 : 0;
        if (al1checked && numbervalue) setShowDiv1(1);
        else setShowDiv1(2);
      };


    return (
        <div className={cx("content")}>
                <h1 className={cx('heading-title')}>Cấu hình hệ thống</h1>
                {showNoti === 1 ? (<div className={cx("popupY")}>Lưu thành công</div>):            
                showNoti ===2 ?   (<div className={cx("popupN")}>Thông tin thiếu sót!</div>):
                (<div></div>)
                }
                <div className={cx("page")}>
                    <div className={cx("left")}>
                        <div className={cx("title")}>Loại tệp</div>
                            <div className={cx("cbWrap")}>
                                <label>
                                <input
                                type="checkbox"
                                checked={checkboxes.checkbox1}
                                onChange={() => handleCheckboxChange('checkbox1')}
                                />
                                .docx
                            </label>
                            </div>
                            <div className={cx("cbWrap")}>
                                <label>
                                <input
                                type="checkbox"
                                checked={checkboxes.checkbox2}
                                onChange={() => handleCheckboxChange('checkbox2')}
                                />
                                .pdf
                            </label>
                            </div>
                            <div className={cx("cbWrap")}>
                                <label>
                                <input
                                type="checkbox"
                                checked={checkboxes.checkbox3}
                                onChange={() => handleCheckboxChange('checkbox3')}
                                />
                                .xls
                            </label>
                            </div>
                            <div className={cx("cbWrap")}>
                                <label>
                                <input
                                type="checkbox"
                                checked={checkboxes.checkbox4}
                                onChange={() => handleCheckboxChange('checkbox4')}
                                />
                                .jpeg
                            </label>
                            </div>
                            <div className={cx("cbWrap")}>
                                <label>
                                <input
                                type="checkbox"
                                checked={checkboxes.checkbox5}
                                onChange={() => handleCheckboxChange('checkbox5')}
                                />
                                .png
                                </label>
                            </div>
                    </div>
                   
                    <div className={cx("mid")}>
                        <div className={cx("title")}>Ngày phát hành</div>
                        <div className={cx("calendar")}>
                        <CalendarConfig/>
                        </div>
                        
                    </div>
                    <div className={cx("right")}>
                        <div className={cx("title")}>Số trang</div>
                        <input className={cx("numberBox")}
                            type="number"
                            value={numvalue}
                            onChange={handleChange}
                        />
                    </div>
                                       
                </div>
                <div className={cx("save")} onClick={handleSave}>Lưu</div>
                

            </div>
    );
}

export default ConfigSystem;
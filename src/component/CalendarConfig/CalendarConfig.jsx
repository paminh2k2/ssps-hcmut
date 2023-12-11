import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./calendar.css";
export default function CalendarConfig() {
    const [date, setDate] = useState(new Date());
    const onChange= date =>{
        setDate(date);
    };
    return (
        <div>
            {/* <h2>Date Issue</h2> */}
            <div className='datebox'>{date.toDateString()}</div>
            <Calendar
                onChange={onChange}
                value={date}
                minDate={new Date()}
            />
        </div>
    );
}
// render(<CalendarConfig/>, document.querySelector("#root"));
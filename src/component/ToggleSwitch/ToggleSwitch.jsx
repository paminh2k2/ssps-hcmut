import React, { useRef } from "react";

function ToggleSwitch() {
  const ref = useRef(null);
  const [isOn, setIsOn] = React.useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div ref={ref}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "40px",
          backgroundColor: isOn ? "blue" : "gray",
          color: "white",
          fontSize: "20px",
          borderRadius: "15px",
          marginTop: "20px",
        }}
        onClick={toggleSwitch}
      >
        {isOn ? "On" : "Off"}
      </div>
    </div>
  );
}

export default ToggleSwitch;

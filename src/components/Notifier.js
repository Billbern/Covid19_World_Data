import React from "react";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Notifier() {
  return (
    <FontAwesomeIcon className="notify"
      icon={faBell}
      style={{ color: "#8d9093", fontSize: "1.3rem", marginLeft: "1rem" }}
    />
  );
}

export default Notifier;

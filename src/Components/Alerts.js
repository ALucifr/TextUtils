import React from "react";

function Alerts(props) {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <>
        <div
          className={`alert alert-${props.alert.type} alert-dismissable fade show`}
          role="alert"
          style={{ transition: "all 0.3s ease-in-out" }}
        >
          <strong>{capitalize(props.alert.type)}</strong>:{props.alert.message}
        </div>
      </>
    )
  );
}

export default Alerts;

import React from "react";

export const AlertButton = (props) => {
  const { onClick, children, className } = props;

  return (
    <>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </>
  );
};

import React from "react";

export default function Button({
  disabled = false,
  onClick = () => {},
  children,
}) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

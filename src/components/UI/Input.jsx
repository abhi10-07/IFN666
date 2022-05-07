import React from "react";

const Input = React.forwardRef((props, ref) => {
  const onChangeHandler = props.input.onChange !== "" ? props.onChange : "";
  return (
    <div className={props.divClasses}>
      {props.label === "" ? (
        ""
      ) : (
        <label htmlFor={props.input.id}>{props.label}</label>
      )}
      <input ref={ref} {...props.input} onChange={onChangeHandler} />
    </div>
  );
});

export default Input;

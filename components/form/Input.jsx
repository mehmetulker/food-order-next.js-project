import React from "react";

function Input(props) {
  const { type, errorMessage, touched, placeholder, ...inputProps } = props;
  console.log(props);
  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input
          type={type}
          className={`h-14 w-full border border-primary outline-none px-4 peer  rounded-xl ${
            type !== "datetime-local" && "pt - 2"
          }`}
          required
          {...inputProps}
        />
        {type !== "datetime-local" && (
          <span className="absolute  top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs  peer-valid:text-xs transition-all">
            {placeholder}
          </span>
        )}
      </label>
    </div>
  );
}

export default Input;

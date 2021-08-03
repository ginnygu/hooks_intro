import { useState } from "react";

function CustomHooksUsingArrayFormat(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
  }

  function greetUser() {
    alert("Hi, " + value);
  }

  function showValue() {
    console.log(value);
  }

  function clearInput() {
    setValue("");
  }

  return [value, onChange, clearInput, greetUser, showValue];
}

export default CustomHooksUsingArrayFormat;

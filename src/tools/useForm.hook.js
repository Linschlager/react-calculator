import { useState, useEffect } from "react";

const useForm = (initialState = "", updateCallback = () => {}) => {
  const [value, setValue] = useState(initialState);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    updateCallback(value);
  }, [updateCallback, value]);
  return { value, onChange };
};

export default useForm;

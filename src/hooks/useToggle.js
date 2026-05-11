import { useState } from "react";

/**
 * useToggle hook
 * Handles boolean state toggling (true/false)
 */
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
};

export default useToggle;
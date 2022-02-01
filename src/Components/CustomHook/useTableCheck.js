import { useRef } from "react";

const useTableCheck = () => {
  const inputRef = useRef(null);

  const handleCheck = () => {
    const checkBox = document.getElementsByClassName("table-check");
    const allCheckBox = [...checkBox];

    if (inputRef.current.checked) {
      allCheckBox.forEach(i => i.checked = true);
    } else {
      allCheckBox.forEach(i => i.checked = false);
    }
  }

  return { inputRef, handleCheck }
}

export default useTableCheck;

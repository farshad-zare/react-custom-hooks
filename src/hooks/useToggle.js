import { useState } from "react";

function useToggle(initVal) {
  const [bool, setBool] = useState(Boolean(initVal));

  function toggleBool(val) {
    if (arguments.length === 0) {
      setBool(!bool);
    } else if (typeof val === "boolean") {
      setBool(val);
    } else if (
      (typeof val === "object" || typeof val === "string") &&
      val?.length === 0
    ) {
      setBool(false);
    } else {
      setBool(Boolean(val));
    }
  }

  return [bool, toggleBool];
}

export default useToggle;

import React from "react";
import { Button } from "reactstrap";

const ResetButton = () => {
  const handleReset = () => {
    Array.from(document.querySelectorAll(["input", "select"])).forEach(
      (input) => (input.value = "")
    );
  };

  return (
    <div>
      <Button onClick={handleReset} color="link" style={{ color: "#210202" }}>
        reset
      </Button>
    </div>
  );
};

export default ResetButton;

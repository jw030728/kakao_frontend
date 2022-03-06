import React from "react";
import { useState, ChangeEvent } from "react";

const ConditionalText = () => {
  const [name, setName] = useState<string>();
  const printName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    if (newName.length > 5) {
      setName(newName);
    } else {
      setName("");
    }
  };

  return (
    <>
      <input type="text" onChange={printName} />
      <article>{name}</article>
      {/* <>{name.length > 5 && name}</> */}
    </>
  );
};

export default ConditionalText;

import React from "react";
import { useState, ChangeEvent } from "react";

const HiddenName = () => {
  const [name, setName] = useState<string>("");
  const printName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    if (newName.length > 2) {
      const firstWord = newName[0];
      const lastWord = newName[newName.length - 1];
      const blocked = "*".repeat(newName.length - 2);
      const blockedWord = firstWord + blocked + lastWord;
      setName(blockedWord);
    } else {
      setName(newName);
    }
  };

  return (
    <>
      <input type="text" onChange={printName} />
      <article>{name}</article>
    </>
  );
};

export default HiddenName;

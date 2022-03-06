import React from "react";
import { useState, ChangeEvent } from "react";

const WelcomeName = () => {
  const [name, setName] = useState<string>();
  const printName = (event: ChangeEvent<HTMLInputElement>) => {
    // const newName = event.currentTarget.value;
    // setName(newName);
    setName(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" onChange={printName} />
      <article>반갑습니다 {name} 님</article>
    </>
  );
};

export default WelcomeName;

import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { textState } from "./textState";
import { charCountState } from "./charCountState";

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={onChange}
        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"
      />
      <br />
      Echo: {text}
    </div>
  );
};

export function CharacterCounter() {
  return (
    <>
      <h1 className="mt-4">Character Counter</h1>
      <div className="m-3">
        <TextInput />
        <CharacterCount />
      </div>
    </>
  );
}

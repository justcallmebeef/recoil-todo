import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import { todoListState } from "./todoListState";

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"
      />
      <button onClick={addItem} className="ml-4">
        Add
      </button>
    </div>
  );
};

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

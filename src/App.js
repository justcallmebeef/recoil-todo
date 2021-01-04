import React from "react";
import { RecoilRoot } from "recoil";
import { CharacterCounter } from "./CharacterCounter";
import { TodoList } from "./TodoList";

function App() {
  return (
    <>
      <RecoilRoot>
        <div className="grid justify-items-center">
          <CharacterCounter />
          <TodoList />
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;

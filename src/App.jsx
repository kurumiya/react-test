import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue" messeage="お元気ですか" />
      <ColorfulMessage color="pink" messeage="元気です" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;

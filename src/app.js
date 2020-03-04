import React from 'react';
import "./app.less";
import background from "./images/7.jpg";

function App() {
  return (
    <div className="App">
      <h1 className="text">
        Hello Webpack<i className="iconfont">&#xe6b1;</i>
      </h1>
      <img className="background" src={background} alt="" />
      {consele.log("I cannot print to console!")}
    </div>
  );
}

export default App;
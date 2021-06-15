import React from "react";
import "./App.css";
import SideBar from "./user/SideBar";
import Chat from "./user/Chat";

const App = () => {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default App;

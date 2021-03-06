import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widget from "./components/Widget/Widget";
const App = () => {
  return (
    <div className="App">
      {/* SideBar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widget />
    </div>
  );
};

export default App;

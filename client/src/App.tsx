import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/components/router/router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;

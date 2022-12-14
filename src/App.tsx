import { useState } from "react";
import Header from "./component/Header";
import SectionInput from "./component/SectionInput";
import SectionTodo from "./component/SectionTodo";
import "./App.css";

function App() {
  return (
    <>
      <Header title="VITE-KERJAAN" />
      <SectionInput />
      <SectionTodo />
    </>
  );
}

export default App;

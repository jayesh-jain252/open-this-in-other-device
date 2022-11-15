import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import OpenForm from "./components/OpenForm";
import SendForm from "./components/SendForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/send" element={<SendForm />} />
        <Route path="/open" element={<OpenForm />} />
      </Routes>
    </>
  );
}

export default App;

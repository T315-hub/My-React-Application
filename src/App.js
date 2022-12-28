import "./App.css";
import FunCom from "./pages/FunCom";
import ClassCom from "./pages/ClassCom";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// Hoc layout

// import BaseHoc from "./hoc/BaseHoc";

function App() {
  const [name, setName] = useState("devTown");
  return (
    // <>
    // <p>Our react is ready so it will be start </p>
    // <FunCom  name={name} setName={setName} />
    // <ClassCom  />
    // </>
    <Routes>
      <Route
        path="/"
        element=
        // {
          // // <BaseHoc>
          //   <ClassCom />
          // // </BaseHoc>
          // {<ClassCom />}
        // }
        {<ClassCom />}
      />
      <Route
        path="/functional"
        element=
        /*
        {
          <BaseHoc>
            <FunCom name={name} setName={setName} />{" "}
          </BaseHoc>
        }
        */
         <FunCom name={name} setName={setName} />
      />
    </Routes>
  );
}

export default App;

import "./App.css";
import About from "./Components/About";
import Alerts from "./Components/Alerts";
import Forms from "./Components/Forms";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const passAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      document.body.style.transition = "all 0.5s ease-in-out";
      passAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#1d1d1d";
      document.body.style.transition = "all 0.5s ease-in-out";
      passAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alerts alert={alert} />
        {/* <Navbar></Navbar> */}
        <div className="container">
          <Routes>
            <Route key="about" exact path="/about" element={<About />}></Route>
            <Route
              key="/"
              exact
              path="/"
              element={
                <Forms
                  heading="Enter your text here to analyze:"
                  mode={mode}
                  passAlert={passAlert}
                ></Forms>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;

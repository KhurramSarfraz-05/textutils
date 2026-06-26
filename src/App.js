import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alert from './Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="textUtils" About="About" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
             <TextForm showAlert={showAlert}heading="Enter the text to analyze" mode={mode} />
          {/* </Route>
        </Switch> */}
          </div>
          {/* </Router> */}
      </>
  );
}

export default App;
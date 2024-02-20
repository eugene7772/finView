import React from "react";
import Head from "./component/head/Head";
import Body from "./component/body/Body";
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Head/>
        </BrowserRouter>
        <Body/>
    </div>
  );
}

export default App;

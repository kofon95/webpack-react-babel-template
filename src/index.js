import React from "react";
import {render} from "react-dom";
import './style.css';

function App(props) {
    return (
        <h1>Your app is ready to go</h1>
    )
}

render(<App/>, document.getElementById('root'))

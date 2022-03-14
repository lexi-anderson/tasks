import React from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                This is the header/banner of the Lexi UD CISC275 website.
            </header>
            <hr></hr>Task 11<hr></hr>
            <Quizzer></Quizzer>
            <hr></hr>Sketch<hr></hr>
            <hr></hr>List of Completed Requirements<hr></hr>
            <hr></hr>Task 3 Image:
            <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a7/James_Lafferty_as_Nathan.png"
                alt="Image of Nathan Scott from One Tree Hill"
            />
        </div>
    );
}

export default App;

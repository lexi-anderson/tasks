import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
import { Quizzer } from "./quizzer/Quizzer";
import QuizzerSketch from "./images/Quizzer_sketch.jpg";

export function ShowHideTasks(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => setVisible(!visible)}>
                Show/Hide Tasks 8-10
            </Button>
            {visible && (
                <div>
                    <hr></hr>Task 10<hr></hr>
                    <CheckAnswer expectedAnswer="42"></CheckAnswer>
                    <hr></hr>
                    <GiveAttempts></GiveAttempts>
                    <hr></hr>
                    <EditMode></EditMode>
                    <hr></hr>
                    <ChangeColor></ChangeColor>
                    <hr></hr>
                    <MultipleChoiceQuestion
                        options={["a", "b", "c"]}
                        expectedAnswer="b"
                    ></MultipleChoiceQuestion>
                    <hr></hr>Task 9<hr></hr>
                    <DoubleHalf></DoubleHalf>
                    <hr></hr>
                    <ChooseTeam></ChooseTeam>
                    <hr></hr>
                    <ColoredBox></ColoredBox>
                    <hr></hr>
                    <ShoveBox></ShoveBox>
                    <hr></hr>Task 8<hr></hr>
                    <Counter></Counter>
                    <hr></hr>
                    <RevealAnswer></RevealAnswer>
                    <hr></hr>
                    <StartAttempt></StartAttempt>
                    <hr></hr>
                    <TwoDice></TwoDice>
                    <hr></hr>
                    <ChangeType></ChangeType>
                    <hr></hr>
                    <CycleHoliday></CycleHoliday>
                </div>
            )}
        </div>
    );
}

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                This is the header/banner of the Lexi UD CISC275 website.
            </header>
            <Quizzer></Quizzer>
            <hr></hr>Sketch
            <div>
                <img
                    src={QuizzerSketch}
                    height="500"
                    width="1000"
                    alt="Image of quizzer sketch"
                />
            </div>
            <hr></hr>List of Completed Requirements
            <hr></hr>
            <ShowHideTasks></ShowHideTasks>
            <hr></hr>Task 3 Image:
            <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a7/James_Lafferty_as_Nathan.png"
                alt="Image of Nathan Scott from One Tree Hill"
            />
        </div>
    );
}

export default App;

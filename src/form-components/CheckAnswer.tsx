import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [enteredAnswer, setEnteredAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="enteredAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={enteredAnswer}
                    onChange={(event: ChangeEvent) =>
                        setEnteredAnswer(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                The entered answer is{" "}
                {enteredAnswer == expectedAnswer ? "✔️" : "❌"}.
            </div>
        </div>
    );
}

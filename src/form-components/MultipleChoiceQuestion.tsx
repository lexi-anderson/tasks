import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="selectChoice">
                <Form.Label></Form.Label>
                <Form.Select
                    value={selectedChoice}
                    onChange={(event) => setSelectedChoice(event.target.value)}
                >
                    {options.map((choice: string) => (
                        <option value={choice} key={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selectedChoice == expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

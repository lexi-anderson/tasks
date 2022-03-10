import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "grey"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((value: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(event) => setColor(event.target.value)}
                    id={"response-" + value}
                    key={"response-" + value}
                    label={value}
                    value={value}
                    checked={color === value}
                    style={{ backgroundColor: value }}
                />
            ))}
            You have chosen:
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </span>
        </div>
    );
}

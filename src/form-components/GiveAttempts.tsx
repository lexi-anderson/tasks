import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [numAttemptsLeft, setNumAttemptsLeft] = useState<number>(3);
    const [numAttemptsRequest, setNumAttemptsRequest] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="requestedAttempts">
                <Form.Label>Number of Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={numAttemptsRequest}
                    onChange={(event: ChangeEvent) =>
                        setNumAttemptsRequest(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setNumAttemptsLeft(numAttemptsLeft - 1)}
                disabled={numAttemptsLeft === 0}
            >
                Use
            </Button>
            <Button
                onClick={() =>
                    setNumAttemptsLeft(numAttemptsLeft + numAttemptsRequest)
                }
            >
                Gain
            </Button>
            Number of Attempts Left: {numAttemptsLeft}
        </div>
    );
}

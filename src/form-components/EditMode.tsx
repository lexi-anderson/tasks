import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editable"
                label="Edit?"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEditMode(event.target.checked);
                }}
            />
            {!editMode && (
                <span>
                    {userName} is {student ? "" : "not"} a student.
                </span>
            )}

            {editMode && (
                <Form.Group controlId="userName">
                    <Form.Label>Change Your Name:</Form.Label>
                    <Form.Control
                        value={userName}
                        onChange={(event: ChangeEvent) =>
                            setUserName(event.target.value)
                        }
                    />
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={student}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setStudent(event.target.checked);
                        }}
                    ></Form.Check>
                </Form.Group>
            )}
        </div>
    );
}

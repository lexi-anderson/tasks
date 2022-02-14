import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                This is the header/banner of the Lexi UD CISC275 website.
            </header>
            <h1>This is everything for Task 3.</h1>
            <Container>
                <Row>
                    <Col>
                        List of things I like to do:
                        <ul>
                            <li>Eat ravioli</li>
                            <li>Watch One Tree Hill</li>
                            <li>Hang with my friends</li>
                        </ul>
                        <div
                            style={{
                                width: "500px",
                                height: "100px",
                                backgroundColor: "#D22B2B"
                            }}
                        >
                            This is the first red rectangle.
                        </div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                    <Col>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/a/a7/James_Lafferty_as_Nathan.png"
                            alt="Image of Nathan Scott from One Tree Hill"
                        />
                        <div
                            style={{
                                width: "500px",
                                height: "100px",
                                backgroundColor: "#D22B2B"
                            }}
                        >
                            This is the second red rectangle.
                        </div>
                    </Col>
                </Row>
            </Container>
            <p></p>
        </div>
    );
}

export default App;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>
                        {quiz.title}: {quiz.numquestions} #qs
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{quiz.description}</p>
                </Col>
            </Row>
        </Container>
    );
}

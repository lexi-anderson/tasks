import React, { useState } from "react";
import quizData from "../data/quizzes.json";
import { Quiz } from "../interfaces/quiz";
import { QuizList } from "./QuizList";

const QUIZZES = quizData as Quiz[];

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);

    {
        /*
    function editQuiz(id: number, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
    }

    function deleteQuiz(id: number) {
        setQuizzes(quizzes.filter((quiz: Quiz): boolean => quiz.id !== id));
    }
    */
    }

    return (
        <div className="App">
            <h3>Quizzer</h3>
            <div>
                <QuizList quizzes={quizzes}></QuizList>
            </div>
        </div>
    );
}

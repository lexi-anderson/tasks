import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        const quizzerText = screen.getByText(/Quizzer/i);
        expect(quizzerText).toBeInTheDocument();
    });
});

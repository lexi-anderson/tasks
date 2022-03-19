import { Question } from "./question";

export interface Quiz {
    id: number;
    title: string;
    numquestions: number;
    description: string;
    questions: Question[];
}

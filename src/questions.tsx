// src/questions.tsx
import Question from "../model/Question";
import { v4 as uuidv4 } from "uuid";

export const Questions: Question[] = [
  {
    text: "What is your favorite color?",
    answers: [
      { id: uuidv4(), text: "Red", points: 1 },
      { id: uuidv4(), text: "Blue", points: 2, dealbreaker: <p>Dealbreaker!</p> },
      { id: uuidv4(), text: "Green", points: 3 },
      { id: uuidv4(), text: "Yellow", points: 4 },
    ],
  },
  // Add more questions here!
];
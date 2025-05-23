// model/Question.tsx

import Answer from "./Answer";

export default interface Question {
  text: string;
  answers: Answer[];
  selected?: Answer;
  category: string;
}

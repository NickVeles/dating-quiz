// model/Answer.tsx
import Dealbreaker from "./Dealbreaker";

export default interface Answer {
  text: string;
  points: number;
  dealbreaker?: Dealbreaker;
}

// model/Answer.tsx

export default interface Answer {
  id: string;
  text: string;
  points: number;
  dealbreaker?: React.ReactNode;
}

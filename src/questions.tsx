// src/questions.tsx
import Question from "../model/Question";

export const Questions: Question[] = [
  {
    text: "Where are you from?",
    answers: [
      { text: "🇦🇺 Australia", points: 75 },
      { text: "🇨🇦 Canada", points: 55 },
      { text: "🇨🇳 China", points: 90 },
      { text: "🇪🇺 Europe", points: 35 },
      { text: "🇯🇵 Japan", points: 90 },
      { text: "🇳🇿 New Zealand", points: 65 },
      { text: "🇸🇬 Singapore", points: 100 },
      { text: "🇹🇼 Taiwan", points: 85 },
      { text: "🇺🇸 USA", points: 65 },
      { text: "Other", points: 0, dealbreaker: <p>Dealbreaker!</p> },
    ],
    category: "🔒 Practical Filters",
  },
  {
    text: "What is your gender?",
    answers: [
      { text: "Man", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Woman", points: 0 },
      { text: "Other", points: 0, dealbreaker: <p>Dealbreaker!</p> },
    ],
    category: "🔒 Practical Filters",
  },
  {
    text: "What is your sexuality?",
    answers: [
      { text: "Straight", points: 50 },
      { text: "Bi", points: 50 },
      { text: "Pansexual", points: 50 },
      { text: "Gay", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Asexual", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Other", points: 0 },
    ],
    category: "🔒 Practical Filters",
  },
  {
    text: "How old are you?",
    answers: [
      { text: `18-${new Date().getFullYear() - 2003 - 1}`, points: 50 },
      { text: `${new Date().getFullYear() - 2003}`, points: 20 },
      { text: `${new Date().getFullYear() - 2003 + 1}+`, points: 0, dealbreaker: <p>Dealbreaker!</p> },
    ],
    category: "🔒 Practical Filters",
  },
  {
    text: "Could you take up a Long-Distance Relationship (LDR)?",
    answers: [
      { text: "Yes", points: 50 },
      { text: "Only if we were in the same country", points: 10 },
      { text: "No", points: 0, dealbreaker: <p>Dealbreaker!</p> },
    ],
    category: "🔒 Practical Filters",
  },
  {
    text: "How often do you smoke?",
    answers: [
      { text: "Often", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Sometimes", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Never", points: 50 },
      { text: "Trying to quit", points: 10 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "How often do you drink?",
    answers: [
      { text: "Often", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Sometimes", points: 10 },
      { text: "Never", points: 50 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "What is your take on drugs?",
    answers: [
      { text: "I love both hard and soft drugs!", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "I love soft drugs!", points: 0 },
      { text: "I could try weed, but I don't want to be a stoner", points: 10 },
      { text: "No, thank you", points: 50 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "Do you consider yourself healthy?",
    answers: [
      { text: "Yes, I have a good BMI score, diet, sleep, exercise, and go to the doctor when I need to!", points: 50 },
      { text: "Yes", points: 25 },
      { text: "No", points: 0 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "Are you religious?",
    answers: [
      { text: "Yes", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Yes, I'm a Deist, but not associated with any particular religion", points: 0 },
      { text: "No, I'm an Atheist/Agnostic", points: 50 },
      { text: "I don't know, I doubt my current beliefs", points: 10 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "How often do you use social media?",
    answers: [
      { text: "I'm addicted to doom-scrolling", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Often", points: 0 },
      { text: "Sometimes", points: 25 },
      { text: "Rarely / Never", points: 50 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "Would you like to have a profound life?",
    answers: [
      { text: "Yes", points: 25 },
      { text: "No", points: 0 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "What do you think about casual hookups?",
    answers: [
      { text: "Love them!", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Not for me", points: 20 },
      { text: "Eww...", points: 50 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "Body count?",
    answers: [
      { text: "0", points: 100 },
      { text: "1", points: 50 },
      { text: "2", points: 25 },
      { text: "3", points: 0 },
      { text: "4+", points: 0, dealbreaker: <p>Dealbreaker!</p> },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "What do you think about selling nude content online?",
    answers: [
      { text: "I do it myself!", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Not for me, but I think it empowers women", points: 0 },
      { text: "I don't like it", points: 50 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "What is your take on non-monogamy? (Having multiple partners)",
    answers: [
      { text: "Hell yeah!", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Eww...", points: 50 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "Are you clingy?",
    answers: [
      { text: "Yes", points: 25 },
      { text: "No", points: 0 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "Do you like deep and long talks?",
    answers: [
      { text: "Yes!", points: 50 },
      { text: "Booooring!", points: 0 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "What is your love language?",
    answers: [
      { text: "Words of affirmation", points: 25 },
      { text: "Quality time", points: 50 },
      { text: "Acts of service", points: 25 },
      { text: "Receiving gifts", points: 10 },
      { text: "Physical touch", points: 25 },
      { text: "I don't know / Never thought about it", points: 10 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "Can you handle intense emotions in a partner?",
    answers: [
      { text: "Yes, I welcome emotional depth", points: 50 },
      { text: "It depends", points: 25 },
      { text: "I prefer chill and easygoing only", points: 0 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "What is the greatest value of life? (in your opinion)",
    answers: [
      { text: "Family", points: 25 },
      { text: "Knowledge", points: 75 },
      { text: "Money & Wealth", points: 50 },
      { text: "Pleasure", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Power", points: 50 },
      { text: "Self-discovery", points: 100 },
      { text: "I don't know...", points: 10 },
      { text: "Other", points: 50 },
    ],
    category: "🧭 Values & Mindset",
    },
    {
    text: "Would you like to study even after finishing school?",
    answers: [
      { text: "Yes, I'm a lifelong learner!", points: 50 },
      { text: "Not really", points: 0 },
    ],
    category: "🧭 Values & Mindset",
    },
    {
    text: "How would you feel if you discovered that after death, you would relive your life repeatedly, always the same exact way?",
    answers: [
      { text: "Great! I love my life despite occasional suffering!", points: 100 },
      { text: "Well... At least it's better than nothing?", points: 50 },
      { text: "Awful! No way I'm gonna relive all that shit again...", points: 0 },
    ],
    category: "🧭 Values & Mindset",
    },
    {
    text: "What is your take on immortality?",
    answers: [
      { text: "Hell yeah!", points: 50 },
      { text: "Only my partner gets to be immortal as well", points: 50 },
      { text: "Hell nah!", points: 0 },
    ],
    category: "🧭 Values & Mindset",
    },
    {
    text: "What makes you feel most alive?",
    answers: [
      { text: "Creating something meaningful", points: 50 },
      { text: "Helping others", points: 50 },
      { text: "Traveling and exploring", points: 25 },
      { text: "Achieving goals", points: 25 },
      { text: "Partying and letting loose", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "I don't really know", points: 10 },
    ],
    category: "🧭 Values & Mindset",
    },
    {
    text: "Do you have a strong sense of purpose in life?",
    answers: [
      { text: "Yes, and I'm working toward it", points: 50 },
      { text: "I'm figuring it out", points: 25 },
      { text: "No idea, I'm drifting", points: 0 },
    ],
    category: "🧭 Values & Mindset",
    },
    {
    text: "Are you extroverted/introverted?",
    answers: [
      { text: "Party animal", points: 0, dealbreaker: <p>Dealbreaker!</p> },
      { text: "Extroverted", points: 25 },
      { text: "A mix of both", points: 50 },
      { text: "Introverted", points: 50 },
      { text: "Socially anxious", points: 10 },
    ],
    category: "🧠 Personality",
    },
];
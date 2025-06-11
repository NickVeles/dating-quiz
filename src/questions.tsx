// src/questions.tsx
import Question from "../model/Question";

export const Questions: Question[] = [
  {
    text: "Which breakfast food do you prefer?",
    answers: [
      { text: "Pancakes", points: 0 },
      { text: "Omelette", points: 60 },
      { text: "Cereal", points: 40 },
      { text: "Toast", points: 100 },
      { text: "Fruit", points: 70 },
    ],
    category: "🍳 Food & Drink",
  },
  {
    text: "What type of bread best matches your personality?",
    answers: [
      { text: "Sourdough", points: 0 },
      { text: "Rye", points: 80 },
      { text: "Whole Wheat", points: 60 },
      {
        text: "White",
        points: 0,
        dealbreaker: {
          title: "Oops!",
          subtitle: "Out bread types don't match 💔",
        },
      },
      { text: "Banana Bread", points: 100 },
    ],
    category: "🍞 Fun Personality",
  },
  {
    text: "Which season do you enjoy the most?",
    answers: [
      { text: "Spring", points: 100 },
      { text: "Summer", points: 0 },
      { text: "Autumn", points: 90 },
      { text: "Winter", points: 70 },
    ],
    category: "🌤️ Preferences",
  },
  {
    text: "Pick a pet:",
    answers: [
      { text: "Dog", points: 90 },
      { text: "Cat", points: 100 },
      { text: "Bird", points: 70 },
      { text: "Fish", points: 60 },
      { text: "Hamster", points: 0 },
    ],
    category: "🐾 Animals",
  },
  {
    text: "Which superpower would you choose?",
    answers: [
      { text: "Invisibility", points: 80 },
      { text: "Flying", points: 100 },
      { text: "Super strength", points: 90 },
      { text: "Time travel", points: 0 },
      { text: "Telepathy", points: 60 },
    ],
    category: "🦸 Imagination",
  },
  {
    text: "What’s your favorite way to spend a weekend?",
    answers: [
      { text: "Reading", points: 90 },
      { text: "Exploring outdoors", points: 100 },
      { text: "Watching movies", points: 80 },
      { text: "Cooking", points: 0 },
      { text: "Gaming", points: 60 },
    ],
    category: "🎉 Hobbies",
  },
  {
    text: "Which color do you vibe with most?",
    answers: [
      { text: "Blue", points: 0 },
      {
        text: "Green",
        points: 0,
        dealbreaker: {
          title: "I don't like green! 😭",
        },
      },
      { text: "Red", points: 80 },
      { text: "Yellow", points: 70 },
      { text: "Purple", points: 100 },
    ],
    category: "🎨 Preferences",
  },
  {
    text: "What’s your favorite type of weather?",
    answers: [
      { text: "Sunny", points: 100 },
      { text: "Rainy", points: 80 },
      { text: "Snowy", points: 70 },
      { text: "Windy", points: 0 },
      { text: "Cloudy", points: 90 },
    ],
    category: "🌦️ Preferences",
  },
  {
    text: "Which genre of music do you listen to most?",
    answers: [
      { text: "Pop", points: 100 },
      { text: "Rock", points: 90 },
      { text: "Classical", points: 80 },
      { text: "Jazz", points: 0 },
      { text: "Hip-Hop", points: 60 },
    ],
    category: "🎵 Music",
  },
  {
    text: "Choose a vacation destination:",
    answers: [
      { text: "Beach", points: 100 },
      { text: "Mountains", points: 90 },
      { text: "City", points: 80 },
      { text: "Countryside", points: 0 },
      { text: "Forest", points: 60 },
    ],
    category: "✈️ Travel",
  },
  {
    text: "Which dessert would you never skip?",
    answers: [
      { text: "Ice cream", points: 100 },
      { text: "Cake", points: 0 },
      { text: "Cookies", points: 80 },
      { text: "Fruit salad", points: 70 },
      { text: "Chocolate", points: 60 },
    ],
    category: "🍰 Food & Drink",
  },
  {
    text: "What’s your favorite board game?",
    answers: [
      { text: "Chess", points: 100 },
      { text: "Monopoly", points: 90 },
      { text: "Scrabble", points: 80 },
      { text: "Clue", points: 70 },
      { text: "Catan", points: 0 },
    ],
    category: "🎲 Games",
  },
  {
    text: "Which fictional world would you visit?",
    answers: [
      { text: "Hogwarts", points: 100 },
      { text: "Narnia", points: 90 },
      { text: "Middle-earth", points: 80 },
      { text: "Wakanda", points: 70 },
      { text: "Star Wars Galaxy", points: 0 },
    ],
    category: "📚 Imagination",
  },
  {
    text: "How do you like your coffee (or tea)?",
    answers: [
      { text: "Black", points: 100 },
      { text: "With milk", points: 90 },
      { text: "Sweetened", points: 80 },
      { text: "I prefer tea", points: 70 },
      { text: "I don't drink either", points: 0 },
    ],
    category: "☕ Food & Drink",
  },
  {
    text: "Which hobby would you like to try?",
    answers: [
      { text: "Painting", points: 100 },
      { text: "Gardening", points: 90 },
      { text: "Dancing", points: 80 },
      { text: "Cooking", points: 0 },
      { text: "Photography", points: 60 },
    ],
    category: "🎨 Hobbies",
  },
  {
    text: "What’s your favorite time of day?",
    answers: [
      { text: "Morning", points: 100 },
      { text: "Afternoon", points: 90 },
      { text: "Evening", points: 80 },
      { text: "Night", points: 70 },
      { text: "Anytime", points: 0 },
    ],
    category: "🕒 Preferences",
  },
];

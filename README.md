# Nick's Dating Quiz

Nick's Dating Quiz is a React-based web application designed to evaluate compatibility through a series of questions. The app provides a fun and interactive way to determine how well someone matches with my preferences and values. With full honesty, some day I just thought to myself, "Online dating is such a mess! I am so tired of it... I wish people just did my quiz so both of us wouldn't lose time", and so this project was born.

## Features

- **Interactive Quiz**: A series of questions with multiple-choice answers.
- **Dealbreakers**: Certain answers trigger dealbreaker screens with custom messages and images.
- **Compatibility Scoring**: Calculates a compatibility score based on the user's answers.
- **Dynamic Results**: Displays personalized results with emojis, messages, and images.
- **Modern Image Viewer**: Allows users to zoom in on images using a pinch-to-zoom feature.
- **Animated Transitions**: Smooth transitions between questions and results using Framer Motion.
- **About Me Section**: A section that provides information about me, including my philosophy of life.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: For styling and responsive design.
- **Framer Motion**: For smooth animations and transitions.
- **React Modal**: For creating modals.
- **React Zoom Pan Pinch**: For zoomable images.
- **Jest & React Testing Library**: For testing.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/NickVeles/dating-quiz.git
cd dating-quiz
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`.

## Scripts
- `npm start`: Runs the app in development mode.
- `npm run` build: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm run eject`: Ejects the app configuration (use with caution).

## Folder Structure
```
dating-quiz/
├── model/               # TypeScript interfaces for the app
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # Reusable React components
│   ├── App.tsx          # Main app component
│   ├── questions.tsx    # Quiz questions and logic
│   ├── index.tsx        # Entry point of the app
│   ├── input.css        # Tailwind CSS input file
│   ├── output.css       # Tailwind CSS output file
├── .vscode/             # VS Code settings
├── .gitignore           # Git ignore file
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## License
This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for details.

## Contact
My [GitHub profile](https://github.com/NickVeles) contains all social media you can reach me on. Feel free to connect with me for any questions or collaborations.
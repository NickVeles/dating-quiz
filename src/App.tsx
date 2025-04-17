// src/App.tsx
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Questions } from "./questions";
import "./App.css";
import Question from "../model/Question";
import Answer from "../model/Answer";
import { BrokenHeart, ChevronLeft, Circle, Heart } from "./components/Icons";
import Dealbreaker from "../model/Dealbreaker";

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [dealbreaker, setDealbreaker] = useState<Dealbreaker | null>(null);
  const [userPoints, setUserPoints] = useState(0);
  const [questions, setQuestions] = useState<Question[]>(
    Questions.map((q) => ({ ...q }))
  );

  useEffect(() => {
    if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
      setCurrentQuestion(questions[currentQuestionIndex]);
    } else {
      setCurrentQuestion(null);
    }
  }, [currentQuestionIndex, questions]);

  const handleAnswerSelect = useCallback(
    (answer: Answer) => {
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestionIndex].selected = answer;
      setQuestions(updatedQuestions);

      if (answer.dealbreaker) {
        setDealbreaker(answer.dealbreaker);
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      if (currentQuestionIndex >= questions.length - 1) {
        setUserPoints(
          questions.reduce(
            (total, question) =>
              total + (question.selected ? question.selected.points : 0),
            0
          )
        );
      }
    },
    [currentQuestionIndex, questions, setQuestions]
  );

  const handleGoBack = useCallback(() => {
    setDealbreaker(null);
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }, [currentQuestionIndex]);

  const getCompatibilityMessage = useCallback(() => {
    if (userPoints >= 18) {
      return "Great compatibility! You seem to have a lot in common.";
    } else if (userPoints >= 12) {
      return "Good compatibility! There's definitely potential here.";
    } else {
      return "Some differences, but opposites can attract! Let's see...";
    }
  }, [userPoints]);

  const questionVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">
        Nick's Dating Quiz
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Let's see how compatible we are 😎
      </p>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-6">
            {/* Go back button */}
            <button
              className={`bg-gray-200 text-gray-800 font-semibold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center justify-center ${
                dealbreaker ||
                (currentQuestionIndex > 0 &&
                  currentQuestionIndex < Questions.length)
                  ? "hover:bg-gray-300"
                  : "opacity-50 cursor-not-allowed"
              }`}
              onClick={handleGoBack}
              disabled={
                !(
                  dealbreaker ||
                  (currentQuestionIndex > 0 &&
                    currentQuestionIndex < Questions.length)
                )
              }
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Question indicator */}
            <div className="flex flex-col gap-2 ml-4">
              {Array.from(
                { length: Math.ceil(questions.length / 14) },
                (_, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center gap-1">
                    {questions
                      .slice(rowIndex * 14, rowIndex * 14 + 14)
                      .map((question, index) => (
                        <div
                          key={index}
                          className="flex justify-center items-center"
                        >
                          {question.selected?.dealbreaker ? (
                            <BrokenHeart className="w-5 h-5 text-pink-500" />
                          ) : question.selected ? (
                            <Heart className="w-5 h-5 text-pink-500" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      ))}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              variants={questionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2 }}
            >
              {/* Start screen */}
              {currentQuestionIndex < 0 && (
                <div className="text-center mb-4">
                  <p className="text-lg mb-4">
                    Answer the questions to find out your compatibility score!
                  </p>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setCurrentQuestionIndex(0)}
                  >
                    Start
                  </button>
                </div>
              )}

              {/* Dealbreaker screen */}
              {dealbreaker && (
                <>
                  <p className="mb-2 text-sm font-semibold text-gray-600 text-center">
                    Oops... That's a dealbreaker
                  </p>
                  <h3 className="text-xl font-semibold mb-2">
                    {dealbreaker.title}
                  </h3>
                  {dealbreaker.subtitle && (
                    <div className="text-gray-700 mb-4">
                      {dealbreaker.subtitle}
                    </div>
                  )}
                  {dealbreaker.image && (
                    <div className="flex justify-center mb-4">
                      <img
                        src={dealbreaker.image}
                        alt="dealbreaker"
                        className="max-w-full h-auto rounded-lg"
                      />
                    </div>
                  )}
                </>
              )}

              {/* Results screen */}
              {!dealbreaker && currentQuestionIndex >= questions.length && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Your Compatibility Score:
                  </h3>
                  <p className="text-4xl font-bold text-blue-600 mb-6">
                    {userPoints}
                  </p>
                  <p className="text-lg mb-4">{getCompatibilityMessage()}</p>
                </div>
              )}

              {/* Question */}
              {!dealbreaker && currentQuestion && (
                <>
                  {currentQuestion.category && (
                    <p className="mb-2 text-sm font-semibold text-gray-600 text-center">
                      {currentQuestion.category}
                    </p>
                  )}
                  <p className="mb-4 font-medium">{currentQuestion.text}</p>
                  <div className="grid grid-cols-1 gap-3">
                    {currentQuestion.answers?.map((answer) => (
                      <button
                        key={answer.text}
                        className={`text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                          questions[currentQuestionIndex]?.selected === answer
                            ? "bg-pink-200 hover:bg-pink-300"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}
                        onClick={() => handleAnswerSelect(answer)}
                      >
                        {answer.text}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <footer className="mt-10 text-center text-gray-600">
        <p>
          Made with ❤️ by Nick. You can find this project on my {" "}
          <a
        href="https://github.com/NickVeles/dating-quiz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
          >
        GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default App;

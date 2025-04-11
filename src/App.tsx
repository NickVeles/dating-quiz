// src/App.tsx
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Questions } from "./questions";
import "./App.css";
import Question from "../model/Question";
import Answer from "../model/Answer";

const App: React.FC = () => {
  const maxPoints = Questions.reduce((sum, q) => sum + q.maxPoints, 0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [dealbreaker, setDealbreaker] = useState<React.ReactNode | null>(null);
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
  }, [currentQuestionIndex]);

  const handleAnswerSelect = useCallback(
    (answer: Answer) => {
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestionIndex].selected = answer;
      setQuestions(updatedQuestions);

      if (answer.dealbreaker) {
        setDealbreaker(answer.dealbreaker);
      }

      setCurrentQuestionIndex(currentQuestionIndex + 1);
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
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Are We a Match?
          </h2>

          <AnimatePresence>
            <motion.div
              key={currentQuestionIndex}
              variants={questionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
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

              {/* Go back button */}
              {currentQuestionIndex > 0 && currentQuestionIndex < Questions.length && (
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                  onClick={handleGoBack}
                >
                  {`<<< ${dealbreaker ? "Oops... Take me back" : "Go Back"}`}
                </button>
              )}

              {/* Results screen */}
              {currentQuestionIndex >= questions.length && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Your Compatibility Score:
                  </h3>
                  <p className="text-4xl font-bold text-blue-600 mb-6">
                    {userPoints} / {maxPoints}
                  </p>
                  <p className="text-lg mb-4">{getCompatibilityMessage()}</p>
                </div>
              )}

              {/* Dealbreaker screen */}
              {dealbreaker && (
                <div className="text-red-600 mb-4">
                  <h3 className="text-xl font-semibold mb-4">Dealbreaker:</h3>
                  <p className="text-lg">{dealbreaker}</p>
                </div>
              )}

              {/* Question */}
              {!dealbreaker && currentQuestion && (
                <>
                  {currentQuestion.image && (
                    <img
                      src={currentQuestion.image}
                      alt="Question Image"
                      className="mb-4 rounded-md w-full h-auto"
                    />
                  )}
                  <p className="mb-4 font-medium">{currentQuestion.text}</p>
                  <div className="grid grid-cols-1 gap-3">
                    {currentQuestion.answers?.map((answer) => (
                      <button
                        key={answer.text}
                        className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                          questions[currentQuestionIndex]?.selected === answer
                            ? "bg-blue-400 text-white"
                            : ""
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
    </div>
  );
};

export default App;

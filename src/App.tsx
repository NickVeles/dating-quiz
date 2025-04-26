// src/App.tsx
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Questions } from "./questions";
import "./App.css";
import Question from "../model/Question";
import Answer from "../model/Answer";
import {
  BrokenHeart,
  ChevronLeft,
  Circle,
  Heart,
  Instagram,
  Info,
} from "./components/Icons";
import Dealbreaker from "../model/Dealbreaker";
import ReactModal from "react-modal";
import InfoModal from "./components/InfoModal";
import ImageModal from "./components/ImageModal";

// Set the app element for accessibility
ReactModal.setAppElement("#root");

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [dealbreaker, setDealbreaker] = useState<Dealbreaker | null>(null);
  const [userPoints, setUserPoints] = useState(0);
  const [scoreResult, setScoreResult] = useState({
    emoji: "💀",
    message:
      "Sorry, but that's not happening... How did you even get here without any dealbreakers?",
    instagram:
      "I guess you can try tell me how much you hate this quiz on my instagram:",
    image: "/img/result0.jpg",
  }); // default to worst result
  const [questions, setQuestions] = useState<Question[]>(
    Questions.map((q) => ({ ...q }))
  );

  // Info Modal
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  // Image modal
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

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
        const points = questions.reduce(
          (total, question) =>
            total + (question.selected ? question.selected.points : 0),
          0
        );
        setUserPoints(points);

        if (points >= 1500) {
          setScoreResult({
            emoji: "💖",
            message: "You might be the one...",
            instagram: "Here's my ig (pls dm me):",
            image: "/img/result4.png",
          });
        } else if (points >= 1200) {
          setScoreResult({
            emoji: "😍",
            message: "That's a good score btw!",
            instagram: "Here's my ig, be welcome to dm me:",
            image: "/img/result3.webp",
          });
        } else if (points >= 1000) {
          setScoreResult({
            emoji: "🥰",
            message: "There's some potential!",
            instagram: "You can contact me here:",
            image: "/img/result2.jpg",
          });
        } else if (points >= 400) {
          setScoreResult({
            emoji: "😬",
            message: "Ehh... Not feeling it",
            instagram: "I guess you can dm me anyway:",
            image: "/img/result1.jpg",
          });
        }
      }
    },
    [currentQuestionIndex, questions, setQuestions]
  );

  const handleGoBack = useCallback(() => {
    setDealbreaker(null);
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }, [currentQuestionIndex]);

  // Function to open modal
  const openImageModal = (image: string) => {
    setModalImage(image);
    setIsImageModalOpen(true);
  };

  // Function to close modal
  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setModalImage(null);
  };

  const questionVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">
        Nick's Dating Quiz
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Let's see how compatible we are 😎
      </p>
      <div className="mx-2 flex-grow">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-6">
              {/* Go back button */}
              <button
                className={`bg-gray-200 text-gray-800 font-semibold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center justify-center ${
                  dealbreaker ||
                  (currentQuestionIndex > 0 &&
                    currentQuestionIndex < Questions.length)
                    ? "hover:cursor-pointer"
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
              <div className="flex flex-wrap gap-1 ml-4 justify-center">
                {questions.map((question, index) => (
                  <div key={index} className="flex justify-center items-center">
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
                    <h3 className="text-xl font-semibold mb-4">
                      Before you begin!
                    </h3>
                    <ol className="list-decimal list-outside my-4 text-left px-4">
                      <li className="mb-2">
                        <span className="font-semibold">
                          This site does not collect any data
                        </span>
                        , and this quiz is{" "}
                        <span className="font-semibold">fully anonymous</span>{" "}
                        &ndash; your answers will not be stored anywhere.
                      </li>
                      <li className="mb-2">
                        Please answer honestly to get the best results &ndash;
                        this quiz is for you, not for me &ndash; by doing this
                        quiz, you save yorself time getting to know me,
                        potentially wasting time, hoping for any deeper
                        relationship.
                      </li>
                      <li className="mb-2">
                        You don't have to, you're more than welcome to share
                        your results (as well as your opinion!) with me if you
                        want to. If you dont already have my contact, it will be
                        given to you at the end of the quiz.
                      </li>
                      {/* //TODO: delete this onClick */}
                      <li
                        className="mb-2"
                        onClick={() => setIsInfoModalOpen(true)}
                      >
                        Either way, you might still feel judged during this quiz
                        (unlucky). Take it with a grain of salt.
                      </li>
                    </ol>
                    <div className="my-6 text-left">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={isAgreementChecked}
                          onChange={(e) =>
                            setIsAgreementChecked(e.target.checked)
                          }
                        />
                        <span
                          className={`font-medium ${
                            !isAgreementChecked
                              ? "text-red-500"
                              : "text-green-800"
                          }`}
                        >
                          *I've read and understood the above points
                        </span>
                      </label>
                    </div>
                    <button
                      className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                        isAgreementChecked
                          ? "hover:bg-blue-600"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                      onClick={() => setCurrentQuestionIndex(0)}
                      disabled={!isAgreementChecked}
                    >
                      Start
                    </button>
                  </div>
                )}

                {/* Dealbreaker screen */}
                {dealbreaker && (
                  <>
                    <p className="mb-4 text-sm font-semibold text-gray-600 text-center">
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
                      <div className="flex justify-center">
                        <img
                          src={dealbreaker.image}
                          alt="dealbreaker"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(dealbreaker.image!)}
                        />
                      </div>
                    )}
                  </>
                )}

                {/* Results screen */}
                {!dealbreaker && currentQuestionIndex >= questions.length && (
                  <div>
                    <h3 className="text-xl font-semibold mb-6">
                      Your Compatibility Score:
                    </h3>
                    <p className="text-5xl text-center font-bold text-pink-400 mb-6">
                      {userPoints} {scoreResult.emoji}
                    </p>
                    <p className="mb-4">{scoreResult.message}</p>
                    <div className="flex justify-center mb-2">
                      <img
                        src={scoreResult.image}
                        alt="result"
                        className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                        onClick={() => openImageModal(scoreResult.image)}
                      />
                    </div>
                    <p className="mb-4">{scoreResult.instagram}</p>
                    <div className="flex justify-center">
                      <a
                        href="https://www.instagram.com/nick.veles/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 hover:opacity-90 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline text-shadow-lg"
                      >
                        <Instagram className="w-5 h-5 mr-2" />
                        @nick.veles
                      </a>
                      <div
                        onClick={() => setIsInfoModalOpen(true)}
                        className="flex items-center bg-gray-200 hover:bg-gray-300 hover:cursor-pointer text-gray-800 font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ml-2"
                      >
                        <Info className="w-6 h-6 mr-2" />
                        More about me
                      </div>
                    </div>
                  </div>
                )}

                {/* Question */}
                {!dealbreaker && currentQuestion && (
                  <>
                    {currentQuestion.category && (
                      <p className="mb-4 text-sm font-semibold text-gray-600 text-center">
                        {currentQuestion.category}
                      </p>
                    )}
                    <p className="mb-4 font-medium">{currentQuestion.text}</p>
                    <div className="grid grid-cols-1 gap-3">
                      {currentQuestion.answers?.map((answer) => (
                        <button
                          key={answer.text}
                          className={`text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer ${
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
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        <p>
          Made with ❤️ by Nick. You can find this project on my{" "}
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

      {/* Info modal */}
      <InfoModal
        isOpen={isInfoModalOpen}
        onRequestClose={() => setIsInfoModalOpen(false)}
        openImageModal={openImageModal}
      />

      {/* Image modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onRequestClose={closeImageModal}
        image={modalImage}
      />
    </div>
  );
};

export default App;

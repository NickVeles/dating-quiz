import React from "react";
import ReactModal from "react-modal";
import { Close } from "../components/Icons";
import { motion, AnimatePresence } from "framer-motion";

interface InfoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onRequestClose }) => {
  const myAge =
    new Date().getFullYear() -
    2003 -
    (new Date() < new Date(`${new Date().getFullYear()}-03-21`) ? 1 : 0);

  const core = [
    "🪪 Polish",
    "♂️ Male",
    `🎂 ${myAge}`,
    "📏 190cm/6'3ft",
    "🏋️ Regularly",
    "💪 Average",
    "💼 Software Developer",
  ];

  const languages = ["🇵🇱 Native", "🇺🇸 Fluent", "🇨🇳 (Simplified) Beginner"];

  const preferences = [
    "🙏 Atheist",
    "💘 Straight",
    "💍 Serious Relationship",
    "🧑‍❤️‍👩 Monogamy",
    "🍼 Open to having",
    "🚬 Never",
    "🍺 Never",
    "🌿 Never",
  ];

  const personality = [
    "🧮 Analytical",
    "🤯 ASD",
    "💫 Ambitious",
    "😐 Straightforward",
    "😍 Clingy",
    "🫥 Introverted",
    "🗣️ Talkative",
    "⚖️ Judgmental",
    "🤣 Absurd/Dry Humor",
    "🪨 Resilient",
    "😊 kind",
  ];

  const hobbies = [
    "💻 Programming",
    "🏛️ Philosophy",
    "🤝 Psychology",
    "📚 Books",
    "🎬 Movies",
    "🦾 Robotics and AI",
    "🧠 Neuroscience",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          contentLabel="Info Modal"
          className="fixed inset-0 flex items-center justify-center"
          shouldCloseOnEsc={true}
          ariaHideApp={false}
          overlayClassName={"bg-transparent"}
        >
          <motion.div
            className="w-full h-full flex flex-col bg-white outline-1 outline-gray-300"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="text-gray-800 hover:text-gray-600 hover:cursor-pointer self-start"
              onClick={onRequestClose}
            >
              <Close className="w-12 h-12" />
            </button>
            <h3 className="text-center text-xl font-semibold mb-2">Stats</h3>
            <div className="mx-2 mb-12">
              <div className="max-w-md mx-auto bg-gray-50 shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Core</h4>
                    <div className="flex flex-wrap gap-2">
                    {core.map((item, index) => (
                      <span
                      key={`core-${index}`}
                      className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded border border-blue-100"
                      >
                      {item}
                      </span>
                    ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                    {languages.map((item, index) => (
                      <span
                      key={`languages-${index}`}
                      className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1 rounded border border-green-100"
                      >
                      {item}
                      </span>
                    ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                    Preferences
                    </h4>
                    <div className="flex flex-wrap gap-2">
                    {preferences.map((item, index) => (
                      <span
                      key={`preferences-${index}`}
                      className="bg-purple-50 text-purple-800 text-sm font-medium px-3 py-1 rounded border border-purple-100"
                      >
                      {item}
                      </span>
                    ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                    Personality
                    </h4>
                    <div className="flex flex-wrap gap-2">
                    {personality.map((item, index) => (
                      <span
                      key={`personality-${index}`}
                      className="bg-yellow-50 text-yellow-800 text-sm font-medium px-3 py-1 rounded border border-yellow-100"
                      >
                      {item}
                      </span>
                    ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Hobbies</h4>
                    <div className="flex flex-wrap gap-2">
                    {hobbies.map((item, index) => (
                      <span
                      key={`hobbies-${index}`}
                      className="bg-red-50 text-red-800 text-sm font-medium px-3 py-1 rounded border border-red-100"
                      >
                      {item}
                      </span>
                    ))}
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-center text-xl font-semibold mb-2">
              Philosophy
            </h3>
            <div className="mx-2 mb-12">
              <div className="max-w-md mx-auto bg-gray-50 shadow-md rounded-lg overflow-hidden">
                <div className="p-6">{/*  */}</div>
              </div>
            </div>
          </motion.div>
        </ReactModal>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;

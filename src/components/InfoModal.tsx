import React from "react";
import ReactModal from "react-modal";
import { Close } from "../components/Icons";
import { motion, AnimatePresence } from "framer-motion";

interface InfoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onRequestClose }) => {
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
            <h3 className="text-center text-xl font-semibold mb-2">
              Stats
            </h3>
            <div className="mx-2 mb-12">
              <div className="max-w-md mx-auto bg-gray-50 shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  {/*  */}
                </div>
              </div>
            </div>
            <h3 className="text-center text-xl font-semibold mb-2">
              Philosophy
            </h3>
            <div className="mx-2 mb-12">
              <div className="max-w-md mx-auto bg-gray-50 shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  {/*  */}
                </div>
              </div>
            </div>
          </motion.div>
        </ReactModal>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;

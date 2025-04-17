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
            className="w-full h-full flex flex-col bg-white"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="text-gray-800 hover:text-gray-600 hover:cursor-pointer self-start"
              onClick={onRequestClose}
            >
              <Close className="w-12 h-12" />
            </button>
            <div className="flex justify-center items-center w-full h-full">
              {/* Add modal content here */}
            </div>
          </motion.div>
        </ReactModal>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
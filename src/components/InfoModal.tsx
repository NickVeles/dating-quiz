import React from "react";
import ReactModal from "react-modal";
import { Close } from "../components/Icons";

interface InfoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Info Modal"
      className="fixed inset-0 flex items-center justify-center bg-white"
      shouldCloseOnEsc={true}
    >
      <div className="w-full h-full flex flex-col">
        <button
          className="text-gray-800 hover:text-gray-600 hover:cursor-pointer self-start"
          onClick={onRequestClose}
        >
          <Close className="w-12 h-12" />
        </button>
        <div className="flex justify-center items-center w-full h-full">
          {/* Add modal content here */}
        </div>
      </div>
    </ReactModal>
  );
};

export default InfoModal;
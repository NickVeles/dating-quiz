import React from "react";
import ReactModal from "react-modal";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Close } from "../components/Icons";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="fixed inset-0 flex items-center justify-center bg-black"
      shouldCloseOnEsc={true}
      style={{
        content: {
          zIndex: 1050,
          inset: "0",
          background: "black",
          border: "none",
          padding: "0",
        },
        overlay: {
          zIndex: 1040,
        },
      }}
    >
      <div className="w-full h-full flex flex-col">
        <button
          className="text-white hover:text-gray-300 hover:cursor-pointer self-start"
          onClick={onRequestClose}
        >
          <Close className="w-12 h-12" />
        </button>
        {image && (
          <div className="flex justify-center items-center w-full h-full pb-10">
            <TransformWrapper>
              <TransformComponent
                wrapperStyle={{ height: "100%", width: "100%" }}
              >
                <img src={image} alt="Zoomable" />
              </TransformComponent>
            </TransformWrapper>
          </div>
        )}
      </div>
    </ReactModal>
  );
};

export default ImageModal;
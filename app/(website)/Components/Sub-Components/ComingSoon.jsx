import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    zIndex: 1001, // Adjust the value as needed
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001, // Adjust the value as needed
    border: "0px solid black",
    backgroundColor: "transparent",
  },
};

const ComingSoon = ({ showComingSoon, setShowComingSoon }) => {
  const closeModal = () => {
    setShowComingSoon(false);
  };

  return (
    <div>
      <Modal
        isOpen={showComingSoon}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="bg-gradient-to-br from-newBlue bg-white via-newOceanGreen to-newOrange rounded-full p-1">
          <div className="bg-white rounded-full px-5 py-3">
            <p className="font-bold">Coming Soon</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ComingSoon;

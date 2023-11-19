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

const FAQComponent = ({ showComingSoon, setShowComingSoon, data }) => {
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
        <div className="bg-gradient-to-br from-newBlue md:w-[30vw] bg-white to-newOceanGreen rounded-xl p-1">
          <div className="bg-white rounded-xl md:px-5 px-[5vw] py-3">
            <h1 className="text-xl font-semibold">{data?.title}</h1>
            <p className="mt-1">{data?.value}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FAQComponent;

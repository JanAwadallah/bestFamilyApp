import React from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const Modal = ({ img, setSelectedImg }) => {
  return (
    <div>
      {img.type.includes("image") ? (
        <motion.div
          className="backdrop"
          onClick={(e) =>
            e.target.classList.contains("backdrop") && setSelectedImg(null)
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="modal-header" style={{ border: 0 }}>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={(e) => setSelectedImg(null)}
            />
          </div>
          <motion.img
            src={img.url}
            alt="fancy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ) : (
        <ReactPlayer className="video" controls playing url={img.url} />
      )}
    </div>
  );
};

export default Modal;

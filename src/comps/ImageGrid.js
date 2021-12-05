import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) =>
          doc.type.includes("image") ? (
            <motion.div
              layout
              whileHover={{ opacity: 1 }}
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc)}
            >
              <motion.img
                src={doc.url}
                alt="fancy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ) : (
            <div className="player-wrapper">
              <ReactPlayer
                controls
                className="react-player"
                url={doc.url}
                width="100%"
                height="100%"
              />
            </div>
          )
        )}
    </div>
  );
};

export default ImageGrid;

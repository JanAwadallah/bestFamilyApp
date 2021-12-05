import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

export const ProgressBar = ({ file, setFile, type }) => {
  const { progress, url } = useStorage(file, type);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [progress, setFile, url]);
  return (
    <div className="progress-bar" style={{ width: progress + "%" }}>
      {Math.round(progress) + "%"}
    </div>
  );
};

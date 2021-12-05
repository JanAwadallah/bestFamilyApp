import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState(null);
  const [type, setType] = useState(null);

  const types = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/bmp",
    "image/gif",
    "video/mp4",
  ];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setType(selected.type);
      setMsg(null);
    } else if (selected && !types.includes(selected.type)) {
      setFile(null);
      setMsg("Selected file is not supported");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />

        <i className="fa fa-cloud-upload" aria-hidden="true"></i>
        <span> Add new image or video</span>
      </label>

      <div>
        {file ? (
          <p className="ok">{file.name}</p>
        ) : msg ? (
          <p className="err">{msg}</p>
        ) : (
          "No file selected"
        )}
      </div>
      {file && <ProgressBar file={file} setFile={setFile} type={type} />}
    </form>
  );
};

export default UploadForm;

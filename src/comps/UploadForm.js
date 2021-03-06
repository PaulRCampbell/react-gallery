import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const allowFileTypes = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile && allowFileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select a file type of png or jpeg");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler}></input>
        <span>+</span>
      </label>

      <div className="output">
        {error && <div className="error"> {error} </div>}
        {file && <div> {file.name} </div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;

import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { useDropzone } from "react-dropzone";

const activeStyle = {
  borderColor: "#2196f3",
};
const acceptStyle = {
  borderColor: "#00e676",
};
const rejectStyle = {
  borderColor: "#ff1744",
};
const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 200,
  padding: 4,
  boxSizing: "border-box",
  backgroundImage: `url(${file.preview})`
};

export default function StyledDropzone(props) {
  const { setFieldValue } = props;
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    fileRejections,
    open,
  } = useDropzone({
    accept: "image/jpeg,image/png,image/jpg",
    noClick: true,
    noKeyboard: true,
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFieldValue("image_path", acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );

  const thumbs = files.map((file) => (
    <div
      className="image-previewer"
      style={thumb}
      key={file.name}
    ></div>
  ));

  const filepath = acceptedFiles.map((file, i) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <a role="button" className="text-red" onClick={() => remove(i)}>
        <i className="bi bi-trash"></i>
      </a>
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      {errors.map(e => (
      <p key={e.code} style={{color: "red"}}>
        <b> "{e.message}" </b>
      </p>
       ))}
    </li>
  ));
  
  const remove = (file) => {
    const newFiles = [...files]; // make a var for the new array
    newFiles.splice(file, 1); // remove the file from the array
    acceptedFiles.splice(file, 1); // remove the file from the dropbox
    setFiles(newFiles, acceptedFiles); // update the state
  };

  return (
    <div className="image-uploader py-3">
      <div className="d-flex align-items-center">
        <div
          className="img-preview-box"
          {...getRootProps({ style })}
          onClick={open}
        >
          <div className="preview d-flex align-items-center">
            <div className="w-100 text-center">
              <i className="bi bi-cloud-arrow-up"></i>
              <input {...getInputProps()} />
              <p>Drag & drop</p>
            </div>
            <div className="upload-profile">{thumbs}</div>
          </div>
        </div>
        <div className="ps-5">
          <button
            type="button"
            className="btn btn-warning rounded-pill py-2 px-4 img-upload-btn"
            onClick={open}
          >
            Upload
          </button>
          <div className="img-upload-info mt-3">
            Jpg or png / size: 5 MB max.
          </div>
          <ul className="filename">{filepath} {fileRejectionItems}</ul>
        </div>
      </div>
    </div>
  );
}



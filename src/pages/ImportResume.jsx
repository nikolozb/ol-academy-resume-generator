import { useState } from "react";

const ImportResume = () => {
  const [data, setData] = useState(null);

  const handleUpload = async (e) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      const text = e.target.result;
      setData(JSON.parse(text));
    };

    reader.readAsText(e.target.files[0]);
  };

  return (
    <>
      <label htmlFor="file" className="custom-file-upload">
        Upload a file
      </label>
      <input
        id="file"
        type="file"
        accept="application/JSON"
        onChange={handleUpload}
      />
    </>
  );
};

export default ImportResume;

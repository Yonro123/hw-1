import { useState } from "react";
import "./UrlList.css";

const UrlList = ({ isVisible, text, inputValue }) => {
  const [isCopyVisible, setIsCopyVisible] = useState(false);

  const saveClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Получилось!
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
    setIsCopyVisible(true);
    setTimeout(() => {
      setIsCopyVisible(false);
    }, 2000);
  };

  return (
    <div className={`box ${isVisible ? "active" : "hide"}`}>
      <div className="url">
        <div className="urlText">{text}</div>
        <div className="copyright" onClick={saveClipboard}>
          <div className={`copy ${isCopyVisible && "showCopy"}`}>
            Скопирована!
          </div>
          Копировать ctrl+c
        </div>
      </div>
    </div>
  );
};

export default UrlList;

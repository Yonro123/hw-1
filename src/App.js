import { useState } from "react";
import Form from "./components/Form/Form";
import UrlList from "./components/UrlList/UrlList";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isShortUrl, setIsShortUrl] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="App">
      <div className="container">
        <h2 className="title">
          Помогите клиентам быстро найти вашу страницу в интернете. Благодаря
          короткой ссылке клиентам не придётся видеть длинные url-адреса,
          занимающие много места.
        </h2>
        <Form
          setText={setText}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setIsShortUrl={setIsShortUrl}
        />
        <UrlList isShortUrl={isShortUrl} text={text} inputValue={inputValue} />
      </div>
    </div>
  );
}

export default App;

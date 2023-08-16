import { useState } from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

import "./App.css";

function App() {
  const [inpValue, setInpValue] = useState("");

  return (
    <div className="App">
      <div className="container">
        <h2 className="title">
          Помогите клиентам быстро найти вашу страницу в интернете. Благодаря
          короткой ссылке клиентам не придётся видеть длинные url-адреса,
          занимающие много места.
        </h2>
        <form className="form">
          <Input setInpValue={setInpValue} />
          <Button value="Сократить" disabled={inpValue === "" ? true : false} />
        </form>
      </div>
    </div>
  );
}

export default App;

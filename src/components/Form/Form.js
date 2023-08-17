import Input from "../Input/Input";
import Button from "../Button/Button";

import "./Form.css";
const Form = ({ setText, setInputValue, inputValue, setIsVisible }) => {
  const fetchShortUrl = async () => {
    return await fetch(`https://clck.ru/--?url=${inputValue}`)
      .then((res) => res.text())
      .then((result) => result)
      .catch((err) => console.log(err));
  };

  const makeShortURL = async (e) => {
    e.preventDefault();
    const response = await fetchShortUrl();
    setText(response);
    setIsVisible(true);
  };

  return (
    <form className="form">
      <Input setInputValue={setInputValue} />
      <Button
        value="Сократить"
        disabled={inputValue === "" ? true : false}
        OnClick={makeShortURL}
      />
    </form>
  );
};

export default Form;

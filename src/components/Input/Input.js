import "./Input.css";

const Input = ({ setInputValue, placeholder }) => {
  const onChange = (e) => {
    setInputValue(e.currentTarget.value);
  };
  return (
    <label>
      <input placeholder={placeholder} onChange={onChange} />
    </label>
  );
};

export default Input;

import "./Input.css";

const Input = ({ setInpValue, placeholder }) => {
  const onChange = (e) => {
    setInpValue(e.currentTarget.value);
  };
  return (
    <label>
      <input placeholder={placeholder} onChange={onChange} />
    </label>
  );
};

export default Input;

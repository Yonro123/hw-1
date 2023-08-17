import "./Button.css";

const Button = ({ value, disabled, OnClick }) => {
  return (
    <>
      <button disabled={disabled} onClick={OnClick}>
        {value}
      </button>
    </>
  );
};

export default Button;

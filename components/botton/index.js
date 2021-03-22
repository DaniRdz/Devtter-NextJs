import buttonStyles from "styles/Button.module.css";

export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button
        disabled={disabled}
        className={buttonStyles.btn}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

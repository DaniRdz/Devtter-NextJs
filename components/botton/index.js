import buttonStyles from "../../styles/Button.module.css";

export default function Button({ children, onClick }) {
  return (
    <>
      <button className={buttonStyles.btn} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

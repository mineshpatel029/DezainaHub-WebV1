import "./Button.css";

const Button = ({
  onClick,
  buttonText,
  fontSize,
  backgroundColor,
  fontFamily,
  fontWeight,
  color,
  border,
  borderRadius,
  width,
  height,
}) => {
  console.log(backgroundColor);
  return (
    <div className="button-container">
      <button
        onClick={onClick}
        className={
          backgroundColor === "#f4f4f4" ||
          backgroundColor === "#ffff" ||
          backgroundColor === "white"
            ? "Whitecustom-button"
            : "custom-button"
        }
        style={{
          fontSize: fontSize,
          backgroundColor: backgroundColor,
          color: color,
          border: border,
          borderRadius: borderRadius,
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          width: width,
          height: height,
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;

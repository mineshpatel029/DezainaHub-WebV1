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
  return (
    <div className="button-container">
      <button
      onClick={onClick}
        className="custom-button"
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
 
const CustomButton = ({ children, type, btnStyle, handleClick }) => {
  return (
    <button
      type={type}
      className={`bg-amber-600 px-3 font-bold rounded text-slate-200 ${btnStyle}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;

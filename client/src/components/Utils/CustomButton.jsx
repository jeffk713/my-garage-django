const CustomButton = ({ children, type }) => {
  return (
    <button
      type={type}
      className='bg-amber-600 px-3 font-bold rounded text-slate-200'
    >
      {children}
    </button>
  );
};

export default CustomButton;

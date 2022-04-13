const ServiceInput = ({ type, name, placeholder, required, styleStr }) => {
  return (
    <div className='w-full'>
      <input
        className={`w-full h-8 block bg-zinc-300 focus:outline-none px-2 rounded-sm ${styleStr}`}
        type={type}
        name={name}
        placeholder={placeholder}
        require={required}
      />
    </div>
  );
};

export default ServiceInput;

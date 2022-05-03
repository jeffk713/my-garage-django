const ServiceInput = ({
  type,
  name,
  value,
  placeholder,
  required,
  handleChange,
  styleStr,
}) => {
  return (
    <div className='w-full'>
      <input
        className={`w-full h-8 block bg-zinc-300 focus:outline-none px-2 rounded-sm ${styleStr}`}
        type={type}
        name={name}
        value={value || ''}
        placeholder={placeholder}
        onChange={handleChange}
        required={required}
        autoComplete='off'
      />
    </div>
  );
};

export default ServiceInput;

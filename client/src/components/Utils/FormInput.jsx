import React from 'react';

const FormInput = ({
  type,
  name,
  value,
  handleChange,
  required,
  placeholder,
}) => {
  return (
    <div>
      <input
        className='bg-zinc-500 py-1.5 px-2 focus:outline-none text-center rounded w-[270px]'
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;

const MeasureInput = ({ name, value, handleChange, placeholder }) => {
  return (
    <div className='w-20'>
      <input
        className='w-full text-center outline-none'
        type='number'
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default MeasureInput;

const MeasureInput = ({ name, value, handleChange }) => {
  return (
    <div className='w-20'>
      <input
        className='w-full text-center outline-none'
        type='number'
        name={name}
        value={value}
        onchange={handleChange}
        placeholder={name}
      />
    </div>
  );
};

export default MeasureInput;

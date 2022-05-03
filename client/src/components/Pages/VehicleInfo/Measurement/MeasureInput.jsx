const MeasureInput = ({ name, value, handleChange, placeholder }) => {
  return (
    <div className='w-20'>
      <input
        className='w-full text-center outline-none bg-neutral-500 rounded text-slate-200 font-semibold'
        type='number'
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete='off'
      />
    </div>
  );
};

export default MeasureInput;

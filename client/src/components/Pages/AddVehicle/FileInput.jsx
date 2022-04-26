const FileInput = ({ type, name, value, handleChange, imageUrl }) => {
  return (
    <div className='flex flex-col items-center'>
      <label className='cursor-pointer w-48 h-48 border-2 flex items-center justify-center rounded'>
        Choose image
        <input
          className='hidden'
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FileInput;

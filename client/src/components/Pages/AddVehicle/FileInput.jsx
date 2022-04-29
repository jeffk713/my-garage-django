const FileInput = ({ name, handleChange, imageFile, tempImageFile }) => {
  let selectedImageComponent;
  if (tempImageFile) {
    selectedImageComponent = (
      <img
        className='w-48 h-48'
        src={URL.createObjectURL(tempImageFile)}
        alt='vehicle'
      />
    );
  } else if (imageFile) {
    selectedImageComponent = (
      <img className='w-48 h-48' src={imageFile} alt='vehicle' />
    );
  } else {
    selectedImageComponent = <p>No image selected</p>;
  }
  return (
    <div className='flex flex-col items-center'>
      <div className='w-48 h-48 border-2 flex items-center justify-center rounded-lg overflow-hidden mb-2'>
        {selectedImageComponent}
      </div>
      <label className='cursor-pointer border-2 px-2 flex items-center justify-center rounded'>
        Choose image
        <input
          className='hidden'
          type='file'
          name={name}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FileInput;

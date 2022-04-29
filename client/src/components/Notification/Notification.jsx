const Notification = ({ error, message }) => {
  return (
    <div
      className={`z-50 absolute w-[calc(100%)] h-16 mt-[6rem] flex items-center justify-center ${
        error ? 'bg-red-500' : 'bg-green-500'
      }`}
    >
      <p className='text-lg'>{message}</p>
    </div>
  );
};

export default Notification;

const HomePage = () => {
  return (
    <div className='w-screen h-3/4 flex flex-col justify-center items-center text-slate-100'>
      <div className=' bg-zinc-700 py-4'>
        <p className='w-screen text-center text-4xl font-bold'>
          Manage Vehicles At Your Click
        </p>
      </div>
      <span className='text-slate-100'>
        Not registered yet? Click{' '}
        <code className='font-bold cursor-pointer'>HERE</code>
      </span>
    </div>
  );
};

export default HomePage;

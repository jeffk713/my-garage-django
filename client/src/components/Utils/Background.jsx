import bg from '../../assets/images/bg.jpeg';

const Background = () => {
  return (
    <div
      className='w-screen h-screen absolute -z-10 bg-cover bg-center opacity-50'
      style={{
        backgroundImage: `url(${bg})`,
      }}
    />
  );
};

export default Background;

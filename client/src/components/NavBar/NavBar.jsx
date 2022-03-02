import { CustomLink, Logo } from './index';

const NavBar = () => {
  return (
    <div className='bg-sky-600 px-4 py-10 flex-col justify-center w-52 md:w-1/5 lg:w-1/4'>
      <Logo />
      <CustomLink>Vehicles</CustomLink>
      <CustomLink>Shops</CustomLink>
      <CustomLink>About</CustomLink>
    </div>
  );
};

export default NavBar;

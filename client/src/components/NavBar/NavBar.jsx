import { CustomLink, Logo } from './index';
import { SigninForm } from '../SigninForm';

const NavBar = () => {
  return (
    <div className='bg-sky-600 h-screen px-4 py-10 pb-28 flex flex-col align-center sm:w-1/5 md:w-1/4'>
      <Logo />
      <CustomLink>Dashboard</CustomLink>
      <CustomLink>Vehicles</CustomLink>
      <CustomLink>Shops</CustomLink>
      <CustomLink>About</CustomLink>
      <div className='mt-12'>
        <SigninForm />
      </div>
    </div>
  );
};

export default NavBar;

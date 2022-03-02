import { CustomLink, Logo } from './index';

const NavBar = () => {
  return (
    <div className='bg-slate-900 p-4 flex justify-between '>
      <Logo />
      <div className='flex flex-row gap-4 items-center'>
        <CustomLink>Dashboard</CustomLink>
        <CustomLink>Vehicles</CustomLink>
        <CustomLink>Shops</CustomLink>
        <CustomLink>About</CustomLink>
      </div>
    </div>
  );
};

export default NavBar;

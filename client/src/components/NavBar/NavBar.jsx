import { CustomLink, Logo } from './index';

const NavBar = () => {
  return (
    <div className='bg-zinc-800 px-8 py-4 flex justify-between h-24'>
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

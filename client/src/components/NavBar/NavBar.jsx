import { NavLink, Logo } from './index';

const NavBar = () => {
  return (
    <div className='bg-zinc-800 px-8 py-4 flex justify-between h-24'>
      <Logo />
      <div className='flex flex-row gap-6 items-center'>
        <NavLink>Dashboard</NavLink>
        <NavLink>Vehicles</NavLink>
        <NavLink>Shops</NavLink>
        <NavLink>About</NavLink>
      </div>
    </div>
  );
};

export default NavBar;

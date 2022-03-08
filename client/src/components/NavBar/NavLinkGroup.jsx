import { SideBarToggler } from '.';
import { SignOutLink } from '../Utils';

const NavLinkGroup = ({ name }) => {
  return (
    <div className='flex flex-row gap-6 items-center'>
      <p className='font-semibold text-lg'>Welcome, {name}!</p>
      <div className='flex flex-row gap-6 items-center '>
        <SignOutLink />
        <SideBarToggler />
      </div>
    </div>
  );
};

export default NavLinkGroup;

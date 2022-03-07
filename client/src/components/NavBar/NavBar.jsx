import { connect } from 'react-redux';

import { NavLink, Logo } from './index';
import { SignOutLink } from '../Utils';

const NavBar = ({ isAuth }) => {
  return (
    <div className='bg-zinc-800 px-8 py-4 flex justify-between h-24'>
      <Logo />
      <div className='flex flex-row gap-6 items-center'>
        <NavLink>Dashboard</NavLink>
        <NavLink>Vehicles</NavLink>
        <NavLink>Shops</NavLink>
        {isAuth && <SignOutLink />}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps)(NavBar);

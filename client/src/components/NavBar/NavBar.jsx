import { connect } from 'react-redux';

import { Logo, NavLinkGroup } from './index';

const NavBar = ({ isAuth, name }) => {
  return (
    <div className='bg-neutral-900/90 px-8 py-4 flex justify-between h-24'>
      <Logo />
      {isAuth && <NavLinkGroup name={name} />}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.user.isAuth,
  name: state.user.name,
});

export default connect(mapStateToProps)(NavBar);

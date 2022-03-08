import { connect } from 'react-redux';

import menuIcon from '../../assets/images/bars.svg';

import { toggleSideBar } from '../../redux/side-bar/side-bar-action-creators';

const SideBarToggler = ({ toggleSideBar }) => {
  return (
    <div onClick={() => toggleSideBar()}>
      <img className='w-8 cursor-pointer' src={menuIcon} alt='bar' />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleSideBar: () => dispatch(toggleSideBar()),
});

export default connect(null, mapDispatchToProps)(SideBarToggler);

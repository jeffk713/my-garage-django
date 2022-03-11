import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { hideSideBar } from '../../redux/side-bar/side-bar-action-creators';

import logo from '../../assets/images/logo.svg';

const Logo = ({hideSideBar}) => {
  const history = useHistory();

  const handleLogoClick = () => {
    hideSideBar()
    history.push('/')
  }
  return (
    <div className='cursor-pointer' onClick={handleLogoClick}>
      <img className='w-44' src={logo} alt='logo' />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  hideSideBar: () => dispatch(hideSideBar()),
});

export default connect(null, mapDispatchToProps)(Logo);

import { useHistory } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

const Logo = () => {
  const history = useHistory();
  return (
    <div className='cursor-pointer' onClick={() => history.push('/')}>
      <img className='w-44' src={logo} alt='logo' />
    </div>
  );
};

export default Logo;

import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { userSignOutAsync } from '../../redux/user/user-thunk-creators';

const SignOutLink = ({ userSignOutAsync }) => {
  const history = useHistory();

  const handleClick = () => {
    userSignOutAsync();
    history.push('/');
  };
  return (
    <div onClick={handleClick}>
      <p className='text-center font-semibold tracking-wider cursor-pointer'>
        Sign out
      </p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  userSignOutAsync: () => dispatch(userSignOutAsync()),
});

export default connect(null, mapDispatchToProps)(SignOutLink);

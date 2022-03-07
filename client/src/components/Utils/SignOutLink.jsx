import { connect } from 'react-redux'

const SignOutLink = () => {
  return (
    <div>
      <p className='text-center font-semibold tracking-wider cursor-pointer'>
        Sign out
      </p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  
})

export default connect()(SignOutLink);

import React from 'react';

const SignInLink = ({ toSignIn }) => {
  return (
    <span className='mt-8'>
      Already registered? Click{' '}
      <code
        className='cursor-pointer text-amber-500 font-semibold'
        onClick={toSignIn}
      >
        HERE
      </code>
    </span>
  );
};

export default SignInLink;

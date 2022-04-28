const SignUpLink = ({ toRegister }) => {
  return (
    <span className='mt-2'>
      Not registered yet? Click{' '}
      <code
        className='cursor-pointer text-amber-500 font-semibold'
        onClick={toRegister}
      >
        HERE
      </code>
    </span>
  );
};

export default SignUpLink;

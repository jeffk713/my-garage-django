import { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { CustomButton, FormInput } from '../../../Utils';
import { SignInLink } from '.';

import { userSignUpAsync } from '../../../../redux/user/user-thunk-creators';

const SignUpForm = ({ toSignIn, userSignUpAsync }) => {
  const history = useHistory();
  const INITIAL_INPUT = {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
  };
  const [input, setInput] = useState(INITIAL_INPUT);
  const { email, name, password, passwordConfirm } = input;

  const handleChange = e => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setInput({ ...input, password: '', passwordConfirm: '' });
    }
    const userCredentials = { email, name, password };
    userSignUpAsync(userCredentials);

    setInput(INITIAL_INPUT);
    history.push('/');
  };
  return (
    <div className='w-full bg-zinc-300/0 flex flex-col justify-center items-center p-8'>
      <form
        className='flex flex-col items-center gap-4 w-fit'
        onSubmit={handleSubmit}
      >
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          placeholder='Email'
          required
        />
        <FormInput
          name='name'
          type='text'
          value={name}
          handleChange={handleChange}
          placeholder='Name'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          placeholder='Password'
          required
        />
        <FormInput
          name='passwordConfirm'
          type='password'
          value={passwordConfirm}
          handleChange={handleChange}
          placeholder='Confirm password'
          required
        />
        <CustomButton type='submit' btnStyle='w-2/5 mt-4'>
          Sign Up
        </CustomButton>
      </form>
      <SignInLink toSignIn={toSignIn} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  userSignUpAsync: userCredentials =>
    dispatch(userSignUpAsync(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUpForm);

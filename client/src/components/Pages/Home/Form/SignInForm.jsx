import { useState } from 'react';
import { connect } from 'react-redux';

import { CustomButton, FormInput } from '../../../Utils';
import { SignUpLink } from '.';

import { userSignInAsync } from '../../../../redux/user/user-thunk-creators';

const INITIAL_INPUT = {
  email: '',
  password: '',
};

const SignInForm = ({ toRegister, userSignInAsync }) => {
  const [input, setInput] = useState(INITIAL_INPUT);
  const { email, password } = input;

  const handleChange = e => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    userSignInAsync(input);
    setInput(INITIAL_INPUT);
  };

  return (
    <div className='flex flex-col items-center'>
      <form
        className='flex flex-row items-stretch gap-3 mt-3'
        onSubmit={handleSubmit}
      >
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          placeholder='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          placeholder='Password'
          required
        />
        <CustomButton type='submit'>Sign In</CustomButton>
      </form>
      <SignUpLink toRegister={toRegister} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  userSignInAsync: userCredentials =>
    dispatch(userSignInAsync(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignInForm);

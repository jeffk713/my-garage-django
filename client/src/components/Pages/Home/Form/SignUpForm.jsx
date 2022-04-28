import { useState } from 'react';

import { CustomButton, FormInput } from '../../../Utils';
import { SignInLink } from '.';

const SignUpForm = ({ toSignIn }) => {
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

    setInput(INITIAL_INPUT);
  };
  return (
    <div className='w-full bg-zinc-200/40 flex flex-col justify-center items-center p-8'>
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

export default SignUpForm;

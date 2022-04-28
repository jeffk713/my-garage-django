import { useState } from 'react';

import { CustomButton, FormInput } from '../../Utils';

const SignUpForm = () => {
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

    setInput(INITIAL_INPUT);
  };
  return (
    <div className='w-full bg-zinc-200/40 flex justify-center p-8'>
      <form
        className='flex flex-col items-center gap-4 w-fit'
        handleSubmit={handleSubmit}
      >
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          placeholder='Email'
        />
        <FormInput
          name='name'
          type='text'
          value={name}
          handleChange={handleChange}
          placeholder='Name'
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          placeholder='Password'
        />
        <FormInput
          name='passwordConfirm'
          type='password'
          value={passwordConfirm}
          handleChange={handleChange}
          placeholder='Confirm password'
        />
        <CustomButton type='submit' btnStyle='w-2/5 mt-4'>
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUpForm;

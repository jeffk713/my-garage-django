import { useState } from 'react';

import { CustomButton, SignFormInput } from '../Utils';

const USER_INPUT = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [input, setInput] = useState(USER_INPUT);
  const { email, password } = input;

  const handleChange = e => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <form className='flex flex-row items-stretch gap-3 mt-3'>
      <SignFormInput
        type='email'
        name='email'
        value={email}
        handleChange={handleChange}
        placeholder='Email'
        required
      />
      <SignFormInput
        type='password'
        name='password'
        value={password}
        handleChange={handleChange}
        placeholder='Password'
        required
      />
      <CustomButton type='submit'>Sign In</CustomButton>
    </form>
  );
};

export default SignInForm;

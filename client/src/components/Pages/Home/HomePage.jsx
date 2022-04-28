import { useState } from 'react';

import { HomeTitle } from '.';
import { SignInForm, SignUpForm } from './Form';

const HomePage = () => {
  const [isToRegister, setIsToRegister] = useState(false);
  return (
    <div
      className={`flex flex-col justify-center items-center text-slate-100  ${
        isToRegister ? 'pt-[10vh]' : 'pt-[25vh]'
      }`}
    >
      <HomeTitle />
      {!isToRegister ? (
        <SignInForm toRegister={() => setIsToRegister(true)} />
      ) : (
        <SignUpForm toSignIn={() => setIsToRegister(false)} />
      )}
    </div>
  );
};

export default HomePage;

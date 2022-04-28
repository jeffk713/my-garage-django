import { useState } from 'react';

import { HomeTitle, SignInForm, SignUpForm, SignUpLink } from '.';

const HomePage = () => {
  const [isToRegister, setIsToRegister] = useState(false);
  return (
    <div
      className={`flex flex-col justify-center items-center text-slate-100  ${
        isToRegister ? 'pt-[15vh]' : 'pt-[25vh]'
      }`}
    >
      <HomeTitle />
      {!isToRegister ? (
        <>
          <SignInForm />
          <SignUpLink toRegister={() => setIsToRegister(true)} />
        </>
      ) : (
        <SignUpForm />
      )}
    </div>
  );
};

export default HomePage;

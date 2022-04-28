import { useState } from 'react';

import { HomeTitle, SignUpLink } from '.';
import { SignInForm } from '../../SigninForm';

const HomePage = () => {
  const [isToRegister, setIsToRegister] = useState(false);
  return (
    <div className='flex flex-col justify-center items-center text-slate-100 pt-[25vh]'>
      <HomeTitle />
      {!isToRegister ? (
        <>
          <SignInForm />
          <SignUpLink toRegister={() => setIsToRegister(true)} />
        </>
      ) : (
        <div>register</div>
      )}
    </div>
  );
};

export default HomePage;

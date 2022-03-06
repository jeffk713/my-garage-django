import { HomeTitle, SignUpLink } from '.';
import { SignInForm } from '../../SigninForm';

const HomePage = () => {
  return (
    <div className='w-screen h-3/4 flex flex-col justify-center items-center text-slate-100'>
      <HomeTitle />
      <SignInForm />
      <SignUpLink />
    </div>
  );
};

export default HomePage;

import { HomeTitle, SignUpLink } from '.';
import { SignInForm } from '../../SigninForm';

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center text-slate-100 pt-[25vh]'>
      <HomeTitle />
      <SignInForm />
      <SignUpLink />
    </div>
  );
};

export default HomePage;

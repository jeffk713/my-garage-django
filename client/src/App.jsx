import { useEffect } from 'react';
import { connect } from 'react-redux';

import { NavBar } from './components/NavBar';
import { Background } from './components/Utils';
import { HomePage } from './components/Pages/Home';
import { DashboardPage } from './components/Pages/Dashboard';

import { authBySession } from './redux/user/user-thunk-creators';

const App = ({ isAuth, authBySession }) => {
  useEffect(() => {
    !isAuth && authBySession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-screen h-screen mx-auto bg-fixed'>
      <Background />
      <NavBar />
      <div className='text-gray-800 relative h-[calc(100vh-6rem)]'>
        {isAuth ? <DashboardPage /> : <HomePage />}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.user.isAuth,
});

const mapDispatchToProps = dispatch => ({
  authBySession: () => dispatch(authBySession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

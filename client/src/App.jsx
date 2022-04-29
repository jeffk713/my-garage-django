import { useEffect } from 'react';
import { connect } from 'react-redux';

import { NavBar } from './components/NavBar';
import { HomePage } from './components/Pages/Home';
import { DashboardPage } from './components/Pages/Dashboard';
import { SideBar } from './components/SideBar';
import { Notification } from './components/Notification';

import { authBySession } from './redux/user/user-thunk-creators';

import bg from './assets/images/bg.jpeg';

const App = ({ isAuth, authBySession }) => {
  useEffect(() => {
    !isAuth && authBySession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className='min-h-screen mx-auto'
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <SideBar />
      <Notification />
      <NavBar />
      <div className='text-gray-800 relative min-h-[calc(100vh-6rem)]'>
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

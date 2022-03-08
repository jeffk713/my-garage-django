import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Background } from './components/Utils';
import { HomePage } from './components/Pages/Home';
import { DashboardPage } from './components/Pages/Dashboard';

import { authBySession } from './redux/user/user-thunk-creators';

const App = ({ isAuth, authBySession }) => {
  useEffect(() => {
    !isAuth && authBySession();
  }, []);

  return (
    <div className='w-screen h-screen mx-auto bg-fixed'>
      <Background />
      <NavBar />
      <div className='text-gray-800 relative h-[calc(100vh-6rem)]'>
        <Switch>
          <Route exact path='/' component={isAuth ? DashboardPage : HomePage} />
        </Switch>
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

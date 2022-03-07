import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Background } from './components/Utils';
import { HomePage } from './components/Pages/Home';
import { DashboardPage } from './components/Pages/Dashboard';

function App({ isAuth }) {
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
}

const mapStateToProps = state => ({
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps)(App);

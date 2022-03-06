import { Switch, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Background } from './components/Utils';
import { HomePage } from './components/Pages/Home';

function App() {
  return (
    <div className='w-screen h-screen mx-auto bg-fixed'>
      <Background />
      <NavBar />
      <div className='text-gray-800 relative h-[calc(100vh-6rem)]'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/dashboard' component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

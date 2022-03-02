import { NavBar } from './components/NavBar';

import bg from './assets/images/bg.jpeg';
import './App.css';

function App() {
  return (
    <div className='w-screen h-screen mx-auto bg-fixed'>
      <NavBar />
      <div className='bg-slate-200 text-gray-800'>
        <div
        className='h-[cal(100vh - )]'
          style={{
            backgroundImage: `url(${bg})`,
          }}
        />
        <div>APP START</div>
      </div>
    </div>
  );
}

export default App;

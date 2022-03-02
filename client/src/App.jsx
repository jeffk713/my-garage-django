import { NavBar } from './components/NavBar';
import { Background } from './components/Utils';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div className='w-screen h-screen mx-auto bg-fixed'>
      <Background />
      <NavBar />
      <div className='text-gray-800 relative h-[calc(100vh-6rem)]'>
        <HomePage />
      </div>
    </div>
  );
}

export default App;

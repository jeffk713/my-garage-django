import NavBar from './components/NavBar/NavBar';

import './App.css';

function App() {
  return (
    <div className='App w-screen flex flex-row xl:w-10/12 h-screen mx-auto'>
      <NavBar />
      <div className='bg-slate-200 grow text-gray-800'>APP START</div>
    </div>
  );
}

export default App;

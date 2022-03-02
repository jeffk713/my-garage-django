// import NavBar from './components/NavBar/NavBar';

import './App.css';

function App() {
  return (
    <div className='App w-screen flex flex-row xl:w-10/12 h-screen mx-auto'>
      <div className='bg-sky-600 grow-0 w-52 md:w-1/5 lg:w-1/4'>
        <div>LINK1</div>
        <div>LINK2</div>
        <div>LINK3</div>
      </div>
      <div className='bg-slate-200 grow text-gray-800'>APP START</div>
    </div>
  );
}

export default App;

import { Switch, Route } from 'react-router-dom';

import { SideBar } from '../../SideBar';

const DashboardPage = () => {
  return (
    <div className='grid grid-cols-10 h-full bg-neutral-300/80'>
      <SideBar />
      <div className='col-span-8'>content</div>
    </div>
  );
};

export default DashboardPage;

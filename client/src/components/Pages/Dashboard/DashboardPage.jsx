import { Switch, Route } from 'react-router-dom';

import { SideBar } from '../../SideBar';

const DashboardPage = () => {
  return (
    <div className='h-full bg-neutral-300/80'>
      <SideBar />
      <div className=''>content</div>
    </div>
  );
};

export default DashboardPage;

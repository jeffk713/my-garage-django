import { Switch, Route } from 'react-router-dom';

import { VehiclePost } from '.';
import { SideBar } from '../../SideBar';

const DashboardPage = () => {
  return (
    <div className='h-full bg-neutral-300/80'>
      <SideBar />
      <div className='p-12 flex flex-col'>
        <h2 className='text-3xl font-bold border-b-4 border-zinc-800'>
          DASHBOARD
        </h2>
        <div className='p-12 flex flex-wrap gap-8'>
          <VehiclePost />
          <VehiclePost />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

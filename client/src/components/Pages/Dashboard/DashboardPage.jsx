import { Switch, Route } from 'react-router-dom';

import { Sidebar } from '.';

const DashboardPage = () => {
  return (
    <div className='grid grid-cols-9 h-full'>
      <Sidebar />
      <div className='col-span-7'>content</div>
    </div>
  );
};

export default DashboardPage;

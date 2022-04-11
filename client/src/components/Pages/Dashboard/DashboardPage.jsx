import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '.';
import { VehicleInfoPage } from '../VehicleInfo';

const DashboardPage = () => {
  return (
    <div className='min-h-[calc(100vh-6rem)] bg-neutral-300/70'>
      <div className='flex flex-col h-full'>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/vehicle/:vehicleId' component={VehicleInfoPage} />
        </Switch>
      </div>
    </div>
  );
};

export default DashboardPage;

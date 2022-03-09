import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '.';
import { VehicleInfoPage } from '../VehicleInfo';

const DashboardPage = () => {
  return (
    <div className='h-full bg-neutral-300/80 overflow-y-auto'>
      <div className='p-12 flex flex-col'>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/vehicle/:vehicleId' component={VehicleInfoPage} />
        </Switch>
      </div>
    </div>
  );
};

export default DashboardPage;

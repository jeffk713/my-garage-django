import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '.';
import { VehicleInfoPage } from '../VehicleInfo';

const DashboardPage = () => {
  return (
    <div className='min-h-full bg-neutral-300/80'>
      <div className='py-12 flex flex-col h-full'>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/vehicle/:vehicleId' component={VehicleInfoPage} />
        </Switch>
      </div>
    </div>
  );
};

export default DashboardPage;

import { connect } from 'react-redux';

import { VehicleSummary } from '.';
import { ServiceTableContainer } from '../../ServiceTable';

import { getVehicleByVehicleId } from '../../../utils/data-utils';

const VehicleInfoPage = ({ match, vehicles }) => {
  const vehicleId = match.params.vehicleId;
  const vehicleToDisplay = getVehicleByVehicleId(vehicles, vehicleId);

  return (
    <div className='bg-zinc-800/90'>
      <div className='w-11/12 p-8 mx-auto max-w-[1280px] min-h-[calc(100vh-6rem)] grid grid-cols-10 text-slate-200 '>
        <VehicleSummary vehicle={vehicleToDisplay} />
        <ServiceTableContainer vehicle={vehicleToDisplay} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps)(VehicleInfoPage);

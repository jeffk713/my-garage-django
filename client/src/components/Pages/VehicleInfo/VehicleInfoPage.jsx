import { connect } from 'react-redux';

import { VehicleSummary } from '.';
import { ServiceTableContainer } from '../../ServiceTable';

import { getVehicleByVehicleId } from '../../../utils/data-utils';

const VehicleInfoPage = ({ match, vehicles }) => {
  const vehicleId = match.params.vehicleId;
  const vehicleToDisplay = getVehicleByVehicleId(vehicles, vehicleId);

  return (
    <div className='p-8 min-h-full grid grid-cols-10 rounded bg-zinc-800/90 text-slate-200'>
      <VehicleSummary vehicle={vehicleToDisplay} />
      <ServiceTableContainer vehicle={vehicleToDisplay} />
    </div>
  );
};

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps)(VehicleInfoPage);

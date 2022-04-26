import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AddVehiclePage } from '.';

import { getVehicleByVehicleId } from '../../../utils/data-utils';

const AddVehiclePageContainer = ({ vehicles }) => {
  const params = useParams();
  const vehicleIdToDisplay = params.vehicleId ? params.vehicleId : null;
  const vehicleToDisplay = getVehicleByVehicleId(vehicles, vehicleIdToDisplay);
  return (
    <div>
      <AddVehiclePage vehicleToDisplay={vehicleToDisplay} />
    </div>
  );
};

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps)(AddVehiclePageContainer);

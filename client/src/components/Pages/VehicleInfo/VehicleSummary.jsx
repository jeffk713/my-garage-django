import { Measurement } from './Measurement';
import { VehicleInfo } from '.';

const VehicleSummary = ({ vehicle }) => {
  console.log(vehicle);
  return (
    <div className='col-span-4 flex flex-col items-center justify-start font-semibold text-slate-200 py-8'>
      <VehicleInfo vehicle={vehicle} />
      <Measurement
        vehicleNote={vehicle && vehicle.vehicleNote}
        vehicleId={vehicle && vehicle.id}
      />
    </div>
  );
};

export default VehicleSummary;

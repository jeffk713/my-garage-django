import { Measurement } from './Measurement';
import { VehicleInfo } from '.';

const VehicleSummary = ({ vehicle }) => {
  console.log(vehicle);
  return (
    <div className='col-span-4 flex flex-col items-center justify-center font-semibold text-slate-200'>
      <VehicleInfo vehicle={vehicle} />
      <Measurement vehicleNote={vehicle && vehicle.vehicleNote} />
    </div>
  );
};

export default VehicleSummary;

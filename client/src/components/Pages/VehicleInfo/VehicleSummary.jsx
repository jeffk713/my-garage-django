import { Measurement } from './Measurement';
import { VehicleInfo } from '.';

const VehicleSummary = () => {
  return (
    <div className='col-span-4 flex flex-col items-center justify-center font-semibold text-slate-200'>
      <VehicleInfo />
      <Measurement />
    </div>
  );
};

export default VehicleSummary;

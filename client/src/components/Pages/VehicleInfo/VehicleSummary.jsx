import { Measurement } from './Measurement';
import { VehicleInfo } from '.';

const VehicleSummary = () => {
  return (
    <div className='col-span-4 flex flex-col gap-4 items-center justify-around font-semibold text-slate-200'>
      <VehicleInfo />
      <Measurement />
    </div>
  );
};

export default VehicleSummary;

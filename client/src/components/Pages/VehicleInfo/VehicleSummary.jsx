import { VehicleAvatar } from '../../VehicleCard';
import { Measurement } from './Measurement';

const VehicleSummary = () => {
  return (
    <div className='col-span-4 flex flex-col gap-4 items-center justify-around font-semibold text-slate-200'>
      <div className='flex flex-row gap-8 items-center'>
        <VehicleAvatar />
        <div className=''>
          <div>2011</div>
          <div>BMW</div>
          <div>328xi</div>
          <div>My car</div>
        </div>
      </div>
      <Measurement />
    </div>
  );
};

export default VehicleSummary;

import { VehicleAvatar } from '../../VehicleCard';
import { CustomButton } from '../../Utils';

import carTopView from '../../../assets/images/car-inspection.png';

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
      <div className='border-2 p-4 rounded'>
        <form class='text-zinc-800 flex flex-col gap-4'>
          <div className='flex flex-col items-center'>
            <input className='w-12' type='number' name='fBrake' />
            <div className='flex flex-row my-4'>
              <div className='flex flex-col justify-around'>
                <input className='w-12' type='number' name='fBrake' />
                <input className='w-12' type='number' name='fBrake' />
              </div>
              <img className='w-20' src={carTopView} alt='car top view' />
              <div className='flex flex-col justify-around'>
                <input className='w-12' type='number' name='fBrake' />
                <input className='w-12' type='number' name='fBrake' />
              </div>
            </div>
            <input className='w-12' type='number' name='rBrake' />
          </div>
          <div>
            <textarea className='p-2' name='note' cols='30' rows='2'></textarea>
          </div>
          <CustomButton>Save</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default VehicleSummary;

import { CustomButton } from '../../../Utils';
import { TireMeasurePair, MeasureInput } from '.';

import carTopView from '../../../../assets/images/car-inspection.png';
import edit from '../../../../assets/images/edit-icon.svg';

const Measurement = () => {
  return (
    <div className='border-2 p-4 rounded flex flex-col'>
      <div className='w-full'>
        <img className='w-6 cursor-pointer ml-auto' src={edit} alt='edit' />
      </div>
      <form class='text-zinc-800 flex flex-col gap-4'>
        <div className='flex flex-col items-center'>
          <MeasureInput name='F brake' />
          <div className='flex flex-row my-4'>
            <TireMeasurePair />
            <img className='w-20' src={carTopView} alt='car top view' />
            <TireMeasurePair />
          </div>
          <MeasureInput name='R brake' />
        </div>
        <textarea
          className='p-2'
          name='note'
          cols='30'
          rows='2'
          placeholder='Note'
        />
        <CustomButton>Save</CustomButton>
      </form>
    </div>
  );
};

export default Measurement;

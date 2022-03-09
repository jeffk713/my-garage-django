import { MeasureInput } from '.';

const TireMeasurePair = () => {
  return (
    <div className='flex flex-col justify-around'>
      <MeasureInput name='F tire' />
      <MeasureInput name='R tire' />
    </div>
  );
};

export default TireMeasurePair;

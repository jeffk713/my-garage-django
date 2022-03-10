import { VehicleCard } from '../../VehicleCard';

const VehicleInfo = () => {
  return (
    <div className='flex flex-row gap-8 h-40'>
      <VehicleCard />
      <div className='pb-4 flex flex-col h-full justify-start w-24'>
        <div className='grow-0 w-full text-right'>Edit</div>
        <div className='grow h-full flex flex-col gap-2 justify-center'>
          <p>2011</p>
          <p>BMW</p>
          <p>328xi</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;

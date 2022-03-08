import { VehicleAvatar } from '.';

const VehicleCard = () => {
  return (
    <div className='text-center flex flex-col mb-4'>
      <VehicleAvatar />
      <p className='text-lg font-semibold'>My car</p>
    </div>
  );
};

export default VehicleCard;

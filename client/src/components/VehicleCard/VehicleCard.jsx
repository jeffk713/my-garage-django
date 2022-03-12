import { VehicleAvatar } from '.';

const VehicleCard = ({ imageUrl, nickname }) => {
  return (
    <div className='text-center flex flex-col mb-4'>
      <VehicleAvatar imageUrl={imageUrl} />
      <p className='text-lg font-semibold'>{nickname}</p>
    </div>
  );
};

export default VehicleCard;

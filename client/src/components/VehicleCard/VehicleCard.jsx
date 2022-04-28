import { VehicleAvatar } from '.';

const VehicleCard = ({ id, imageFile, nickname, cardStyle }) => {
  return (
    <div className={`text-center flex flex-col mb-4 ${cardStyle}`}>
      <VehicleAvatar imageUrl={imageFile} vehicleId={id} />
      <p className='text-lg font-semibold'>{nickname}</p>
    </div>
  );
};

export default VehicleCard;

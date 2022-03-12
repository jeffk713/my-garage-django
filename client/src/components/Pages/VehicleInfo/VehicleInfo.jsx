import { VehicleCard } from '../../VehicleCard';

import edit from '../../../assets/images/edit-icon.svg';

const VehicleInfo = ({ vehicle }) => {
  return (
    <div className='flex flex-row gap-8 h-40'>
      {vehicle && (
        <>
          <VehicleCard
            imageUrl={vehicle.imageUrl}
            nickname={vehicle.nickname}
          />
          <div className='pb-4 flex flex-col h-full justify-start w-24'>
            <div className='grow-0 ml-auto'>
              <img className='w-6 cursor-pointer' src={edit} alt='edit' />
            </div>
            <div className='grow h-full flex flex-col gap-2 justify-start'>
              <p>{vehicle.year}</p>
              <p>{vehicle.make}</p>
              <p>{vehicle.model}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VehicleInfo;

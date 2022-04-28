import { useParams, useHistory } from 'react-router-dom';

import { VehicleCard } from '../../VehicleCard';

import edit from '../../../assets/images/edit-icon.svg';

const VehicleInfo = ({ vehicle }) => {
  const params = useParams();
  const history = useHistory();

  return (
    <div className='flex flex-row gap-8 h-40'>
      {vehicle && (
        <>
          <VehicleCard
            imageFile={vehicle.imageFile}
            nickname={vehicle.nickname}
          />
          <div className='pb-4 flex flex-col h-full justify-start w-24'>
            <div className='grow-0 ml-auto'>
              <img
                className='w-6 cursor-pointer'
                src={edit}
                alt='edit'
                onClick={() =>
                  history.push(`/vehicle/edit/${params.vehicleId}`)
                }
              />
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

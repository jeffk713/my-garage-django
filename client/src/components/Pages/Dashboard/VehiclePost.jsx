import { useHistory } from 'react-router-dom';

import { ServiceTable } from '../../ServiceTable';
import { VehicleCard } from '../../VehicleCard';

import {
  getMinMaxTireMeasurement,
  getMinMaxBrakeMeasurement,
} from '../../../utils/data-utils';

const VehiclePost = ({ ...vehicle }) => {
  const history = useHistory();
  const { id, imageFile, services, vehicleNote, nickname } = vehicle;

  const minMaxTireMeasurement = getMinMaxTireMeasurement(vehicleNote);
  const minMaxBrakeMeasurement = getMinMaxBrakeMeasurement(vehicleNote);

  return (
    <div
      className='w-full flex items-start gap-4 py-6 px-8 rounded-xl bg-zinc-800/90 text-slate-200 cursor-pointer'
      onClick={() => history.push(`/vehicle/${id}`)}
    >
      <div className='w-60 flex flex-col items-center gap-4'>
        <VehicleCard
          id={id}
          imageUrl={imageFile}
          nickname={nickname}
          cardStyle='mb-0'
        />
        <div className='flex flex-col font-semibold'>
          <p>
            Tires:{' '}
            {minMaxTireMeasurement
              ? `${minMaxTireMeasurement[0]} - ${minMaxTireMeasurement[1]}`
              : ' - '}{' '}
            mm
          </p>
          <p>
            Brakes:{' '}
            {minMaxBrakeMeasurement
              ? `${minMaxBrakeMeasurement[0]} - ${minMaxBrakeMeasurement[1]}`
              : ' - '}{' '}
            mm
          </p>
        </div>
      </div>
      <ServiceTable services={services.slice(0, 3)} />
    </div>
  );
};

export default VehiclePost;

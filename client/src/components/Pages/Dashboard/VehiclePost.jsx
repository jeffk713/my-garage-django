import { useHistory } from 'react-router-dom';

import { ServiceTable } from '../../ServiceTable';
import { VehicleAvatar } from '../../VehicleCard';

import {
  getMinMaxTireMeasurement,
  getMinMaxBrakeMeasurement,
} from '../../../utils/data-utils';

const VehiclePost = ({ ...vehicle }) => {
  const history = useHistory();
  const { id, imageUrl, services, vehicleNote } = vehicle;

  const minMaxTireMeasurement = getMinMaxTireMeasurement(vehicleNote);
  const minMaxBrakeMeasurement = getMinMaxBrakeMeasurement(vehicleNote);

  return (
    <div
      className='w-full flex items-start gap-4 p-10 rounded-xl bg-zinc-800/90 text-slate-200 cursor-pointer'
      onClick={() => history.push(`/vehicle/${id}`)}
    >
      <div className='w-60 flex flex-col items-center gap-4'>
        <VehicleAvatar imageUrl={imageUrl} />
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

import { useHistory } from 'react-router-dom';

import { ServiceTable } from '../../ServiceTable';
import { VehicleAvatar } from '../../VehicleCard';

import {
  getMinMaxTireMeasurement,
  getMinMaxBrakeMeasurement,
} from '../../../utils/data-utils';

const VehiclePost = ({ ...vehicle }) => {
  const history = useHistory();
  const { imageUrl, services, vehicleNote } = vehicle;
  console.log(vehicleNote);
  const minMaxTireMeasurement = getMinMaxTireMeasurement(vehicleNote);
  const minMaxTBrakeMeasurement = getMinMaxTireMeasurement(vehicleNote);
  console.log(minMaxTireMeasurement);
  return (
    <div
      className='w-full flex items-start gap-4 p-10 rounded-xl bg-zinc-800/90 text-slate-200 cursor-pointer'
      onClick={() => history.push(`/vehicle/1`)}
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
            {minMaxTBrakeMeasurement
              ? `${minMaxTBrakeMeasurement[0]} - ${minMaxTBrakeMeasurement[1]}`
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

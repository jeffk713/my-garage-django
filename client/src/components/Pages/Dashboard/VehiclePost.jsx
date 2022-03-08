import { RecentServiceTable } from '.';
import { VehicleAvatar } from '../../VehicleCard';

const VehiclePost = () => {
  return (
    <div>
      <div className='flex'>
        <VehicleAvatar />
        <div>
          <p>Tires: 5-8mm</p>
          <p>Brakes: 8-10mm</p>
        </div>
      </div>
      <RecentServiceTable />
    </div>
  );
};

export default VehiclePost;

import { ServiceTable } from '../../ServiceTable';
import { VehicleAvatar } from '../../VehicleCard';

const VehiclePost = () => {
  return (
    <div className='w-full flex items-start gap-4 p-10 rounded-xl bg-zinc-800/90 text-slate-200'>
      <div className='w-60 flex flex-col items-center gap-4'>
        <VehicleAvatar />
        <div className='flex flex-col font-semibold'>
          <p>Tires: 5-8mm</p>
          <p>Brakes: 8-10mm</p>
        </div>
      </div>
      <ServiceTable />
    </div>
  );
};

export default VehiclePost;

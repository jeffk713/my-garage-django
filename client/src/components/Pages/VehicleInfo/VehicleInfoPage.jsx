import { VehicleSummary } from '.';
import { ServiceTableContainer } from '../../ServiceTable';

const VehicleInfoPage = () => {
  return (
    <div className='p-8 h-full overflow-y-auto grid grid-cols-10 rounded bg-zinc-800/90 text-slate-200'>
      <VehicleSummary />
      <ServiceTableContainer />
    </div>
  );
};

export default VehicleInfoPage;

import { VehicleSummary, VehicleServiceHistory } from '.';

const VehicleInfoPage = () => {
  return (
    <div className='p-8 h-full overflow-y-auto grid grid-cols-10 rounded bg-zinc-800/90 text-slate-200'>
      <VehicleSummary />
      <VehicleServiceHistory />
    </div>
  );
};

export default VehicleInfoPage;

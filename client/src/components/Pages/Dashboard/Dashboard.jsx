import { VehiclePost } from '.';

const Dashboard = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold border-b-4 border-zinc-800'>
        DASHBOARD
      </h2>
      <div className='p-12 flex flex-wrap gap-8 justify-center'>
        <VehiclePost />
        <VehiclePost />
      </div>
    </div>
  );
};

export default Dashboard;

import { UserGreet, VehicleCard } from '.';

const Sidebar = () => {
  return (
    <div className='col-span-2 flex flex-col items-center py-8'>
      <UserGreet />
      <VehicleCard />
      <VehicleCard />
    </div>
  );
};

export default Sidebar;

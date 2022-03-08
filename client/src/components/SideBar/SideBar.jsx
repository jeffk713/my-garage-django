import { UserGreet, VehicleCard } from '.';

const SideBar = () => {
  return (
    // <div className='col-span-2 flex flex-col items-center py-8 bg-zinc-600/80 text-slate-200'>
    <div className='col-span-2 flex flex-col items-center py-8 bg-zinc-500/80 text-slate-200 absolute w-[16rem] h-full -left-[16rem] transition duration-700 ease-in-out translate-x-full'>
      <UserGreet />
      <VehicleCard />
      <VehicleCard />
    </div>
  );
};

export default SideBar;

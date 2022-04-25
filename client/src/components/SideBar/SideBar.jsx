import { connect } from 'react-redux';

import { VehicleAddButton } from '.';
import { Logo } from '../NavBar';
import { VehicleCard } from '../VehicleCard';

const SideBar = ({ sideBarDisplay, vehicles }) => {
  return (
    <div
      className={`col-span-2 flex flex-col items-center py-8 bg-amber-600 text-slate-200 fixed w-[16rem] h-full -left-[16rem] transition duration-700 ease-in-out z-50 overflow-y-auto ${
        sideBarDisplay && 'translate-x-full'
      }`}
    >
      <div className='mb-8'>
        <Logo />
      </div>
      {vehicles.map(vehicle => (
        <VehicleCard key={vehicle.id} {...vehicle} />
      ))}
      <VehicleAddButton />
    </div>
  );
};

const mapStateToProps = state => ({
  sideBarDisplay: state.sideBar.display,
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps)(SideBar);

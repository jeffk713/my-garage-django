import { connect } from 'react-redux';

import { VehicleAddButton } from '.';
import { Logo } from '../NavBar';
import { VehicleCard } from '../VehicleCard';

import { toggleSideBar } from '../../redux/side-bar/side-bar-action-creators';

const SideBar = ({ sideBarDisplay, toggleSideBar, vehicles }) => {
  return (
    <div>
      {sideBarDisplay && (
        <div
          className='fixed w-[calc(100%)] h-screen z-30'
          onClick={() => toggleSideBar()}
        />
      )}
      <div
        className={`col-span-2 flex flex-col items-center py-8 bg-amber-600 text-slate-200 fixed w-[16rem] h-full 
        -left-[16rem] transition duration-700 ease-in-out z-50 overflow-y-auto z-25 ${
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
    </div>
  );
};

const mapStateToProps = state => ({
  sideBarDisplay: state.sideBar.display,
  vehicles: state.vehicle.vehicles,
});

const mapDispatchToProps = dispatch => ({
  toggleSideBar: () => dispatch(toggleSideBar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

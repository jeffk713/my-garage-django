import { connect } from 'react-redux';

import { VehicleAddButton } from '.';
import { VehicleCard } from '../VehicleCard';
import { CustomLink } from '../Utils';

const SideBar = ({ sideBarDisplay }) => {
  return (
    <div
      className={`col-span-2 flex flex-col items-center py-8 bg-amber-600 text-slate-200 absolute w-[16rem] h-full -left-[16rem] transition duration-700 ease-in-out z-50 ${
        sideBarDisplay && 'translate-x-full'
      }`}
    >
      <VehicleCard />
      <VehicleCard />
      <VehicleAddButton />
      <CustomLink>Shops</CustomLink>
    </div>
  );
};

const mapStateToProps = state => ({
  sideBarDisplay: state.sideBar.display,
});

export default connect(mapStateToProps)(SideBar);

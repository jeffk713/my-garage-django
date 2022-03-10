import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleSideBar } from '../../redux/side-bar/side-bar-action-creators';

const VehicleAvatar = ({ toggleSideBar }) => {
  const history = useHistory();

  const selectVehicle = () => {
    history.push(`/vehicle/1`);
    toggleSideBar();
  };
  return (
    <div
      className='w-28 h-28 border-2 rounded-2xl cursor-pointer'
      onClick={selectVehicle}
    >
      PIC
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleSideBar: () => dispatch(toggleSideBar()),
});

export default connect(null, mapDispatchToProps)(VehicleAvatar);

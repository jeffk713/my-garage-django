import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { hideSideBar } from '../../redux/side-bar/side-bar-action-creators';

const VehicleAddButton = ({ hideSideBar }) => {
  const history = useHistory();

  const toAddVehicle = () => {
    hideSideBar();
    history.push('/vehicle/add');
  };
  return (
    <div className='w-28 h-28 border-2 rounded-2xl cursor-pointer flex justify-center items-center'>
      <p
        className='h-28 font-bold text-3xl flex justify-center items-center'
        onClick={toAddVehicle}
      >
        +
      </p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  hideSideBar: () => dispatch(hideSideBar()),
});

export default connect(null, mapDispatchToProps)(VehicleAddButton);

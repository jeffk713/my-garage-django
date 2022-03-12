import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { hideSideBar } from '../../redux/side-bar/side-bar-action-creators';
import defaultVehicle from '../../assets/images/default-vehicle.svg';

const VehicleAvatar = ({ imageUrl, hideSideBar }) => {
  const history = useHistory();

  const selectVehicle = () => {
    history.push(`/vehicle/1`);
    hideSideBar();
  };

  return (
    <div
      className='w-28 h-28 border-2 rounded-2xl cursor-pointer overflow-hidden flex justify-center items-center'
      onClick={selectVehicle}
    >
      {imageUrl ? (
        <div
          className='w-full h-full'
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ) : (
        <img
          className='w-20 h-20'
          src={imageUrl ? imageUrl : defaultVehicle}
          alt='vehicle'
        />
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  hideSideBar: () => dispatch(hideSideBar()),
});

export default connect(null, mapDispatchToProps)(VehicleAvatar);

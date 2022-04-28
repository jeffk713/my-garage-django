import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { VehiclePost } from '.';
import { CustomButton } from '../../Utils';

const Dashboard = ({ vehicles }) => {
  const history = useHistory();
  return (
    <div className='p-12 w-11/12 max-w-[1280px] mx-auto'>
      <h2 className='text-3xl font-bold border-b-4 border-zinc-800'>
        DASHBOARD
      </h2>
      <div className='p-12 flex flex-wrap gap-8 justify-center'>
        {vehicles.map(vehicle => (
          <VehiclePost key={vehicle.id} {...vehicle} />
        ))}
        <div className='w-4/5 bg-zinc-800/90 text-slate-200 p-10 flex flex-col items-center gap-8 rounded-md'>
          <p className='text-2xl'>No vehicle, please register</p>
          <CustomButton
            type='button'
            handleClick={() => history.push('/vehicle/add')}
          >
            Add Vehicle
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps)(Dashboard);

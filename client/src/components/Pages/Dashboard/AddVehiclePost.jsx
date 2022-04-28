import { useHistory } from 'react-router-dom';

import { CustomButton } from '../../Utils';

const AddVehiclePost = () => {
  const history = useHistory();
  return (
    <div className='w-4/5 bg-zinc-800/90 text-slate-200 p-10 flex flex-col items-center gap-8 rounded-md'>
      <p className='text-2xl'>Please register your vehicles</p>
      <CustomButton
        type='button'
        handleClick={() => history.push('/vehicle/add')}
      >
        Add Vehicle
      </CustomButton>
    </div>
  );
};

export default AddVehiclePost;

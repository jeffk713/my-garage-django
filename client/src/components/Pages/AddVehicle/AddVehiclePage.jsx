import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FormInput } from '../../Utils';
import { CustomButton } from '../../Utils';
import { FileInput } from '.';

import { addVehicleAsync } from '../../../redux/vehicle/vehicle-thunk';

const AddVehiclePage = ({ vehicleToDisplay, addVehicleAsync }) => {
  const isExistent = vehicleToDisplay ? true : false;
  console.log(vehicleToDisplay);
  const INITIAL_INPUT = {
    year: '',
    make: '',
    model: '',
    nickname: '',
    imageUrl: '',
    imageFile: '',
  };
  const [input, setInput] = useState(
    isExistent ? vehicleToDisplay : INITIAL_INPUT
  );
  const { year, make, model, nickname, imageFile } = input;
  const history = useHistory();

  useEffect(() => {
    if (isExistent) {
      setInput(vehicleToDisplay);
    }
  }, [isExistent]);

  const handleChange = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isExistent) {
      addVehicleAsync(input);
    } else {
      // update vehicle
    }

    setInput(INITIAL_INPUT);
    history.push('/');
  };

  return (
    <div className='bg-zinc-800/90 p-8 min-h-[calc(100vh-6rem)] text-slate-200'>
      <div className='w-[600px] m-auto my-[110px]'>
        <p className='text-3xl text-center mb-8 '>
          {isExistent ? 'EDIT VEHICLE' : 'ADD VEHICLE'}
        </p>
        <form
          className='w-full flex flex-col gap-4 items-center'
          onSubmit={handleSubmit}
        >
          <div className='w-full flex gap-8 items-center justify-center'>
            <FileInput
              type='file'
              name='imageFile'
              value={imageFile}
              handleChange={handleChange}
            />
            <div className='flex flex-col gap-6 items-center'>
              <FormInput
                type='text'
                name='year'
                value={year}
                handleChange={handleChange}
                placeholder='Year'
                required
              />
              <FormInput
                type='text'
                name='make'
                value={make}
                handleChange={handleChange}
                placeholder='Make'
                required
              />
              <FormInput
                type='text'
                name='model'
                value={model}
                handleChange={handleChange}
                placeholder='Model'
                required
              />
              <FormInput
                type='text'
                name='nickname'
                value={nickname}
                handleChange={handleChange}
                placeholder='Nickname'
                required
              />
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <CustomButton type='submit' btnStyle='p-1 w-48 mt-4'>
              {isExistent ? 'EDIT' : 'ADD'}
            </CustomButton>
            {isExistent && (
              <span className='m-auto border-b border-red-500 text-red-500 font-bold text-sm cursor-pointer mt-12'>
                Delete Vehicle
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addVehicleAsync: vehicleInfo => dispatch(addVehicleAsync(vehicleInfo)),
});

export default connect(null, mapDispatchToProps)(AddVehiclePage);

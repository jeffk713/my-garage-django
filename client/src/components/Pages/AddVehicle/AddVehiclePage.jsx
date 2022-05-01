import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { FormInput } from '../../Utils';
import { CustomButton } from '../../Utils';
import { FileInput } from '.';

import {
  addVehicleAsync,
  editVehicleAsync,
  deleteVehicleAsync,
} from '../../../redux/vehicle/vehicle-thunk/vehicle-thunk-creators';

import { isVehicleOwnedByUser } from '../../../utils/general-utils';

const AddVehiclePage = ({
  vehicleToDisplay,
  addVehicleAsync,
  editVehicleAsync,
  deleteVehicleAsync,
  vehicles,
}) => {
  const history = useHistory();
  const params = useParams();

  const isExistent = vehicleToDisplay ? true : false;
  const INITIAL_INPUT = {
    year: '',
    make: '',
    model: '',
    nickname: '',
    imageFile: '',
    tempImageFile: '',
  };
  const [input, setInput] = useState(
    isExistent ? vehicleToDisplay : INITIAL_INPUT
  );
  const { year, make, model, nickname, imageFile, tempImageFile } = input;

  useEffect(() => {
    if (!isVehicleOwnedByUser(vehicles, params.vehicleId)) {
      return history.push('/');
    }
    if (isExistent) {
      setInput(vehicleToDisplay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExistent, vehicles]);

  const handleChange = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleFileChange = e => {
    setInput({
      ...input,
      imageFile: e.target.files[0],
      tempImageFile: e.target.files[0],
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    delete input.tempImageFile;
    if (isExistent) {
      editVehicleAsync(input, vehicleToDisplay.id);
    } else {
      addVehicleAsync(input);
    }

    setInput(INITIAL_INPUT);
    history.push('/');
  };

  const delelteVehicle = () => {
    if (!isExistent) return;

    deleteVehicleAsync(vehicleToDisplay.id);
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
              name='imageFile'
              imageFile={imageFile}
              tempImageFile={tempImageFile}
              handleChange={handleFileChange}
            />
            <div className='flex flex-col gap-6 items-center'>
              <FormInput
                type='number'
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
              <span
                className='m-auto border-b border-red-500 text-red-500 font-bold text-sm cursor-pointer mt-12'
                onClick={delelteVehicle}
              >
                Delete Vehicle
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,
});

const mapDispatchToProps = dispatch => ({
  addVehicleAsync: vehicleInfo => dispatch(addVehicleAsync(vehicleInfo)),
  editVehicleAsync: (vehicleInfo, vehicleId) =>
    dispatch(editVehicleAsync(vehicleInfo, vehicleId)),
  deleteVehicleAsync: vehicleId => dispatch(deleteVehicleAsync(vehicleId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddVehiclePage);

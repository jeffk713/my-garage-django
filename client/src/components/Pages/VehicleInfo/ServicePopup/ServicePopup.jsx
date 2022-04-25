import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { ServiceInput } from '.';
import { CustomButton } from '../../../Utils';

import {
  addVehicleServiceAsync,
  updateVehicleServiceAsync,
  deleteVehicleServiceAsync,
} from '../../../../redux/vehicle/vehicle-thunk/vehicleService-thunk-creators';

import close from '../../../../assets/images/close-icon.svg';
import edit from '../../../../assets/images/edit-icon.svg';

const ServicePopup = ({
  setPopupDisplay,
  serviceToDisplay,
  setServiceToDisplay,
  addVehicleServiceAsync,
  updateVehicleServiceAsync,
  deleteVehicleServiceAsync,
}) => {
  const params = useParams();
  const isExistent = serviceToDisplay.id;
  if (!serviceToDisplay.note) {
    serviceToDisplay.note = '';
  }

  const INITIAL_INPUT = {
    name: '',
    mileage: '',
    serviceDate: '',
    note: '',
    price: '',
    isWarranty: false,
  };
  const [input, setInput] = useState(
    isExistent ? serviceToDisplay : INITIAL_INPUT
  );
  const [editMode, setEditMode] = useState(false);
  const { name, mileage, serviceDate, note, price, isWarranty } = input;

  const handleChange = e => {
    if (isExistent && !editMode) return;

    const { name, value } = e.target;
    if (name === 'isWarranty') {
      setInput({ ...input, isWarranty: !isWarranty });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newService = { ...input, vehicle: params.vehicleId };
    if (isExistent) {
      if (!editMode) return;

      updateVehicleServiceAsync(newService, newService.id);
    } else {
      addVehicleServiceAsync(newService);
    }

    closePopup();
  };

  const closePopup = () => {
    setServiceToDisplay(INITIAL_INPUT);
    setPopupDisplay(false);
  };

  const cancelEditMode = () => {
    setInput(serviceToDisplay);
    setEditMode(false);
  };

  const deleteVehicleService = () => {
    if (!isExistent || !editMode) return;

    deleteVehicleServiceAsync(serviceToDisplay.id);
    closePopup();
  };

  return (
    <div>
      <div
        className='absolute w-[calc(100%)] h-[calc(100%+6rem)] -mt-[6rem] bg-zinc-300/40'
        onClick={closePopup}
      />
      <div className='absolute bg-zinc-600 w-[600px] left-[calc(50%-300px)] px-12 pb-16 pt-4 rounded mt-[3rem]'>
        <div className='flex justify-end mb-12 -mr-8'>
          <img
            className='w-4 cursor-pointer'
            src={close}
            alt='close'
            onClick={closePopup}
          />
        </div>
        <div className='px-2 mb-4 flex justify-between'>
          <h2 className='text-xl text-orange-400 font-bold'>
            {isExistent ? 'View Service' : 'New Service'}
          </h2>
          {isExistent && !editMode && (
            <img
              className='w-5 cursor-pointer'
              src={edit}
              alt='edit'
              onClick={() => setEditMode(true)}
            />
          )}
        </div>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <ServiceInput
            type='text'
            name='name'
            placeholder='Service name'
            value={name}
            handleChange={handleChange}
            required
          />
          <div className='flex gap-3'>
            <ServiceInput
              type='number'
              name='mileage'
              placeholder='Mileage'
              value={mileage}
              handleChange={handleChange}
              required
            />
            <ServiceInput
              type='date'
              name='serviceDate'
              value={serviceDate}
              handleChange={handleChange}
              required
            />
          </div>
          <textarea
            className='bg-zinc-300 rounded-sm resize-y focus:outline-none p-2'
            name='note'
            placeholder='Note'
            value={note}
            onChange={handleChange}
            rows={4}
          />
          <div className='flex gap-3'>
            <ServiceInput
              type='number'
              name='price'
              placeholder='Price'
              value={price}
              handleChange={handleChange}
              required
            />
            <div className='w-full h-8 bg-zinc-300 flex rounded-sm'>
              <div className='flex gap-4'>
                <label className='flex items-center gap-1'>
                  <span className='px-2'>Warranty </span>
                  <input
                    type='checkbox'
                    name='isWarranty'
                    checked={isWarranty}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className='w-3/5 m-auto'>
            {(!isExistent || editMode) && (
              <CustomButton type='submit' btnStyle='p-1 my-4 w-full'>
                Save
              </CustomButton>
            )}
            {isExistent && editMode && (
              <div className='flex flex-col justify-center'>
                <span
                  className='m-auto border-b border-amber-500 text-amber-500 font-bold text-sm cursor-pointer my-4'
                  onClick={cancelEditMode}
                >
                  Cancel Edit
                </span>
                <span
                  className='m-auto border-b border-red-500 text-red-500 font-bold text-sm cursor-pointer'
                  onClick={deleteVehicleService}
                >
                  Delete Service
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addVehicleServiceAsync: newService =>
    dispatch(addVehicleServiceAsync(newService)),
  updateVehicleServiceAsync: (updatedService, serviceId) =>
    dispatch(updateVehicleServiceAsync(updatedService, serviceId)),
  deleteVehicleServiceAsync: serviceId =>
    dispatch(deleteVehicleServiceAsync(serviceId)),
});

export default connect(null, mapDispatchToProps)(ServicePopup);

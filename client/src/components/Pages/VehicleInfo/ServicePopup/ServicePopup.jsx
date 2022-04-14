import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { ServiceInput } from '.';
import { CustomButton } from '../../../Utils';

import { addVehicleServiceAsync } from '../../../../redux/vehicle/vehicle-thunk/vehicleService-thunk-creators';

import close from '../../../../assets/images/close-icon.svg';
import edit from '../../../../assets/images/edit-icon.svg';

const ServicePopup = ({
  setPopupDisplay,
  serviceToDisplay,
  setServiceToDisplay,
  addVehicleServiceAsync,
}) => {
  const params = useParams();
  const isExistent = serviceToDisplay.id;

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
  const { name, mileage, serviceDate, note, price, isWarranty } = input;

  const handleChange = e => {
    if (isExistent) return;

    const { name, value } = e.target;
    if (name === 'isWarranty') {
      setInput({ ...input, isWarranty: !isWarranty });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isExistent) return;

    const newService = { ...input, vehicle: params.vehicleId };
    addVehicleServiceAsync(newService);
    setInput(INITIAL_INPUT);
    setPopupDisplay(false);
  };

  const closePopup = () => {
    setPopupDisplay(false);
    setServiceToDisplay(INITIAL_INPUT);
  };

  return (
    <div className='absolute bg-zinc-600 w-[600px] left-[calc(50%-300px)] px-12 pb-16 pt-4 rounded mt-[50px]'>
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
        {isExistent && (
          <img className='w-5 cursor-pointer' src={edit} alt='edit' />
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
          {!isExistent && (
            <CustomButton type='submit' btnStyle='p-1 mt-4 w-full'>
              Save
            </CustomButton>
          )}
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addVehicleServiceAsync: newService =>
    dispatch(addVehicleServiceAsync(newService)),
});

export default connect(null, mapDispatchToProps)(ServicePopup);

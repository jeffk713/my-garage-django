import { useState } from 'react';

import { ServiceInput } from '.';
import { CustomButton } from '../../../Utils';

import close from '../../../../assets/images/close-icon.svg';

const ServicePopup = ({ setPopupDisplay }) => {
  const INITIAL_INPUT = {
    serviceName: '',
    mileage: '',
    serviceDate: '',
    serviceNote: '',
    servicePrice: '',
    warranty: false,
  };
  const [input, setInput] = useState(INITIAL_INPUT);
  const {
    serviceName,
    mileage,
    serviceDate,
    serviceNote,
    servicePrice,
    warranty,
  } = input;

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'warranty') {
      setInput({ ...input, warranty: !warranty });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(input);
    setInput({ ...INITIAL_INPUT });
  };

  return (
    <div className='absolute bg-zinc-600 w-[600px] left-[calc(50%-300px)] px-12 py-16 rounded mt-[50px]'>
      <div
        className='px-2 flex justify-end'
        onClick={() => setPopupDisplay(false)}
      >
        <img className='w-4 cursor-pointer' src={close} alt='close' />
      </div>
      <div className='px-2 mb-4'>
        <h2 className='text-xl text-orange-400 font-bold'>New Service</h2>
      </div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <ServiceInput
          type='text'
          name='serviceName'
          placeholder='Service name'
          value={serviceName}
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
          name='serviceNote'
          placeholder='Note'
          value={serviceNote}
          onChange={handleChange}
          rows={4}
        />
        <div className='flex gap-3'>
          <ServiceInput
            type='number'
            name='servicePrice'
            placeholder='Price'
            value={servicePrice}
            handleChange={handleChange}
            required
          />
          <div className='w-full h-8 bg-zinc-300 flex rounded-sm'>
            <div className='flex gap-4'>
              <label className='flex items-center gap-1'>
                <span className='px-2'>Warranty </span>
                <input
                  type='checkbox'
                  name='warranty'
                  value={warranty}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>
        <div className='w-3/5 m-auto'>
          <CustomButton type='submit' btnStyle='p-1 mt-4 w-full'>
            Save
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ServicePopup;

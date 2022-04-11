import { useState } from 'react';

import { FormInput } from '../../Utils';
import { CustomButton } from '../../Utils';

const AddVehiclePage = () => {
  const INITIAL_INPUT = {
    nickname: '',
    model: '',
    year: '',
    make: '',
  };
  const [input, setInput] = useState(INITIAL_INPUT);

  return (
    <div className='bg-zinc-800/90 p-8 min-h-[calc(100vh-6rem)] text-slate-200'>
      <div className='w-[600px] m-auto my-[110px]'>
        <p className='text-3xl text-center mb-8 '>ADD VEHICLE</p>
        <form className='w-full flex flex-col gap-4 items-center'>
          <div className='w-full flex gap-8 items-center justify-center'>
            <div className='flex flex-col items-center'>
              <label className='cursor-pointer w-48 h-48 border-2 flex items-center justify-center rounded'>
                Choose image
                <input className='hidden' type='file' name='imageFile' />
              </label>
            </div>
            <div className='flex flex-col gap-6 items-center'>
              <FormInput
                type='text'
                name='year'
                // handleChange={handleChange}
                placeholder='Year'
                required
              />
              <FormInput
                type='text'
                name='make'
                // handleChange={handleChange}
                placeholder='Make'
                required
              />

              <FormInput
                type='text'
                name='model'
                // handleChange={handleChange}
                placeholder='Model'
                required
              />
              <FormInput
                type='text'
                name='nickname'
                // handleChange={handleChange}
                placeholder='Nickname'
                required
              />
            </div>
          </div>
          <CustomButton type='submit' btnStyle='p-1 w-48 mt-4'>
            ADD
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default AddVehiclePage;

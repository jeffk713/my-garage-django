import { ServiceInput } from '.';
import { CustomButton } from '../../../Utils';

const ServicePopup = () => {
  return (
    <div className='absolute bg-zinc-500 w-[600px] left-[calc(50%-300px)] px-12 py-16 rounded mt-[50px]'>
      <div className='px-2 mb-4'>
        <h2 className='text-xl text-orange-400 font-bold'>New Service</h2>
      </div>
      <div className='flex flex-col gap-4'>
        <ServiceInput
          type='text'
          name='serviceName'
          placeholder='Service name'
          required
        />
        <div className='flex gap-3'>
          <ServiceInput
            type='number'
            name='mileage'
            placeholder='Mileage'
            required
          />
          <ServiceInput type='date' name='serviceDate' required />
        </div>
        <textarea
          className='bg-zinc-300 rounded-sm resize-y focus:outline-none p-2'
          placeholder='Note'
          rows={4}
        />
        <div className='flex gap-3'>
          <ServiceInput
            type='number'
            name='servicePrice'
            placeholder='Price'
            required
          />
          <div className='w-full h-8 bg-zinc-300 flex rounded-sm'>
            <div className='flex gap-4'>
              <label className='flex items-center gap-1'>
                <span className='px-2'>Warranty </span>
                <input type='checkbox' name='warranty' />
              </label>
            </div>
          </div>
        </div>
        <div className='w-3/5 m-auto'>
          <CustomButton btnStyle='p-1 mt-4 w-full'>Save</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;

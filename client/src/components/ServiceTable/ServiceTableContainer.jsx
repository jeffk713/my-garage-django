import { ServiceTable } from '.';

const ServiceTableContainer = () => {
  return (
    <div className='col-span-6 py-4'>
      <div className='flex flex-row justify-between items-center'>
        <p className='font-semibold py-2'>Recent service history</p>
        <div className='flex flex-row gap-2'>
          <p>filtered by year</p>
          <select className='bg-zinc-800 h-fit'>
            <option value={0}>All year</option>
            <option value={2022}>2022</option>
          </select>
        </div>
      </div>
      <ServiceTable />
    </div>
  );
};

export default ServiceTableContainer;

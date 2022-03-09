import { ServiceItem } from '.';

const ServiceTable = () => {
  return (
    <div className='font-semibold flex flex-col items-center w-full pt-2'>
      <div className='w-full bg-amber-600 grid grid-cols-8 gap-2 items-stretch text-center'>
        <div className='col-span-2'>Service</div>
        <div>Mileage</div>
        <div className='col-span-2'>Date</div>
        <div>Warranty</div>
        <div>Price</div>
      </div>
      <ServiceItem />
    </div>
  );
};

export default ServiceTable;

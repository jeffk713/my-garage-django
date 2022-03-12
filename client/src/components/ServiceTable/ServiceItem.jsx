const ServiceItem = ({ ...service }) => {
  const { name, mileage, serviceDate, isWarranty } = service;
  return (
    <div className='w-full grid grid-cols-6 gap-2 items-stretch text-center py-2'>
      <div className='col-span-2 overflow-hidden'>{name}</div>
      <div>{mileage}</div>
      <div>{isWarranty ? 'Yes' : 'No'}</div>
      <div className='col-span-2'>{serviceDate}</div>
    </div>
  );
};

export default ServiceItem;

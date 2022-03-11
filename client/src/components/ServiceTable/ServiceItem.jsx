const ServiceItem = ({ ...service }) => {
  const { name, mileage, serviceDate, isWarranty } = service;
  return (
    <div className='w-full grid grid-cols-7 gap-2 items-stretch text-center py-2'>
      <div className='col-span-2 overflow-hidden'>{name}</div>
      <div>{mileage}</div>
      <div className='col-span-2'>{serviceDate}</div>
      <div>{isWarranty ? 'Yes' : 'No'}</div>
      <div> Del </div>
    </div>
  );
};

export default ServiceItem;

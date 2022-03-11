const ServiceItem = () => {
  return (
    <div className='w-full grid grid-cols-7 gap-2 items-stretch text-center py-2'>
      <div className='col-span-2 overflow-hidden'>Oil change</div>
      <div>43000</div>
      <div className='col-span-2'>Feb 22 2022</div>
      <div> Yes </div>
      <div> Del </div>
    </div>
  );
};

export default ServiceItem;

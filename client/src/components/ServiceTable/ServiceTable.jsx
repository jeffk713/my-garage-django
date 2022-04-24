import { ServiceItem, NoService } from '.';

const ServiceTable = ({
  services,
  popupDisplay,
  setPopupDisplay,
  setServiceToDisplay,
}) => {
  return (
    <div className='font-semibold flex flex-col items-center w-full pt-2 mb-4'>
      <div className='w-full bg-amber-600 grid grid-cols-6 gap-1 py-1 items-stretch text-center px-1'>
        <p className='col-span-2'>Service</p>
        <p>Mileage</p>
        <p>Warranty</p>
        <p className='col-span-2'>Date</p>
      </div>
      {services.length > 0 ? (
        services.map((service, index) => (
          <ServiceItem
            key={service.id}
            {...service}
            index={index}
            popupDisplay={popupDisplay}
            setPopupDisplay={setPopupDisplay}
            setServiceToDisplay={setServiceToDisplay}
          />
        ))
      ) : (
        <NoService />
      )}
    </div>
  );
};

export default ServiceTable;

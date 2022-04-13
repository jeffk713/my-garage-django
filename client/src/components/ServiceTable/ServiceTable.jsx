import { ServiceItem, NoService } from '.';

const ServiceTable = ({ services, popupDisplay, setPopupDisplay, setServiceToDisplay }) => {
  return (
    <div className='font-semibold flex flex-col items-center w-full pt-2 mb-4'>
      <div className='w-full bg-amber-600 grid grid-cols-6 gap-2  py-1 items-stretch text-center'>
        <div className='col-span-2'>Service</div>
        <div>Mileage</div>
        <div>Warranty</div>
        <div className='col-span-2'>Date</div>
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

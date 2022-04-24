import { useParams } from 'react-router-dom';

const ServiceItem = ({
  index,
  popupDisplay,
  setPopupDisplay,
  setServiceToDisplay,
  ...service
}) => {
  const params = useParams();
  const { name, mileage, serviceDate, isWarranty } = service;

  const openServicePopup = () => {
    if (!params.vehicleId || popupDisplay) return;

    setPopupDisplay(true);
    setServiceToDisplay(service);
  };
  return (
    <div
      className={`w-full grid grid-cols-6 gap-1 items-stretch text-center py-1 px-1 mt-0.5 cursor-pointer ${
        index % 2 ? 'bg-neutral-600' : 'bg-neutral-500'
      }`}
      onClick={openServicePopup}
    >
      <p className='col-span-2 overflow-hidden whitespace-nowrap'>{name}</p>
      <p>{mileage}</p>
      <p>{isWarranty ? 'Yes' : 'No'}</p>
      <p className='col-span-2'>{serviceDate}</p>
    </div>
  );
};

export default ServiceItem;

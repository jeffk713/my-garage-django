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
    console.log(service);
  };
  return (
    <div
      className={`w-full grid grid-cols-6 gap-2 items-stretch text-center py-1 mt-0.5 cursor-pointer ${
        index % 2 ? 'bg-neutral-600' : 'bg-neutral-500'
      }`}
      onClick={openServicePopup}
    >
      <div className='col-span-2 overflow-hidden'>{name}</div>
      <div>{mileage}</div>
      <div>{isWarranty ? 'Yes' : 'No'}</div>
      <div className='col-span-2'>{serviceDate}</div>
    </div>
  );
};

export default ServiceItem;

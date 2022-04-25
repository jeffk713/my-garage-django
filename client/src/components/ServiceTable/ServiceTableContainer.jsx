import { useState } from 'react';

import { ServiceTable } from '.';
import { CustomButton } from '../Utils';

import { getFilteredYearServices } from '../../utils/data-utils';

const ServiceTableContainer = ({
  vehicle,
  popupDisplay,
  setPopupDisplay,
  setServiceToDisplay,
  resetServiceToDisplay,
}) => {
  const [filterYear, setFilterYear] = useState(0);

  const handleFilterYearChange = e => {
    const selectedFilterYear = e.target.value;
    setFilterYear(selectedFilterYear);
  };

  return (
    <div className='col-span-6 py-4 text-center'>
      {vehicle && (
        <>
          <div className='flex flex-row justify-between items-center'>
            <p className='font-semibold py-2'>Service History</p>
            <div className='flex flex-row gap-2'>
              <p>Filtered by year</p>
              <select
                className='bg-zinc-800 h-fit'
                onChange={handleFilterYearChange}
              >
                <option value={0}>All year</option>
                <option value={2022}>2022</option>
              </select>
            </div>
          </div>
          <ServiceTable
            services={getFilteredYearServices(vehicle.services, filterYear)}
            popupDisplay={popupDisplay}
            setPopupDisplay={setPopupDisplay}
            setServiceToDisplay={setServiceToDisplay}
          />
        </>
      )}
      <CustomButton type='button' handleClick={() => setPopupDisplay(true)}>
        Add Service +{' '}
      </CustomButton>
    </div>
  );
};

export default ServiceTableContainer;

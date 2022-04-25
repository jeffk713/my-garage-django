import { useState } from 'react';
import { connect } from 'react-redux';

import { VehicleSummary } from '.';
import { ServicePopup } from './ServicePopup';
import { ServiceTableContainer } from '../../ServiceTable';

import { getVehicleByVehicleId } from '../../../utils/data-utils';

const VehicleInfoPage = ({ match, vehicles }) => {
  const INITIAL_SERVICE_DATA = {
    id: '',
    name: '',
    mileage: '',
    serviceDate: '',
    note: '',
    price: '',
    isWarranty: false,
  };
  const [popupDisplay, setPopupDisplay] = useState(false);
  const [serviceToDisplay, setServiceToDisplay] =
    useState(INITIAL_SERVICE_DATA);

  const vehicleId = match.params.vehicleId;
  const vehicleToDisplay = getVehicleByVehicleId(vehicles, vehicleId);

  return (
    <div className='bg-zinc-800/90'>
      {!!popupDisplay && (
        <ServicePopup
          setPopupDisplay={setPopupDisplay}
          serviceToDisplay={serviceToDisplay}
          setServiceToDisplay={setServiceToDisplay}
        />
      )}
      <div className='w-11/12 p-8 mx-auto max-w-[1280px] min-h-[calc(100vh-6rem)] grid grid-cols-10 text-slate-200 '>
        <VehicleSummary vehicle={vehicleToDisplay} />
        <div className='col-span-6 flex flex-col justify-between px-4 pb-8'>
          <ServiceTableContainer
            vehicle={vehicleToDisplay}
            popupDisplay={popupDisplay}
            setPopupDisplay={setPopupDisplay}
            setServiceToDisplay={setServiceToDisplay}
          />
          {/* <div>
            <p>Richmond Volkswagen</p>
            <p>Contact: 604-123-4567</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps)(VehicleInfoPage);

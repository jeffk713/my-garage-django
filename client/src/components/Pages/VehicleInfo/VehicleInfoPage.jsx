import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { VehicleSummary } from '.';
import { ServicePopup } from './ServicePopup';
import { ServiceTableContainer } from '../../ServiceTable';

import { getVehicleByVehicleId } from '../../../utils/data-utils';
import { isVehicleOwnedByUser } from '../../../utils/general-utils';

const VehicleInfoPage = ({ vehicles }) => {
  const history = useHistory();
  const params = useParams();
  const vehicleId = params.vehicleId;
  const vehicleToDisplay = getVehicleByVehicleId(vehicles, vehicleId);

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

  useEffect(() => {
    if (!isVehicleOwnedByUser(vehicles, params.vehicleId)) {
      return history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicles, params.vehicleId]);

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
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps)(VehicleInfoPage);

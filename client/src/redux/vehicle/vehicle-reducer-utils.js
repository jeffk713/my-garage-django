import { store } from '../store';

export const getVehiclesWithUpdatedVehicleNote = (
  vehicleArr,
  updatedVehicleNote
) => {
  return vehicleArr.map(vehicle => {
    if (vehicle && vehicle.id === updatedVehicleNote.vehicle) {
      const updatedVehicle = { ...vehicle };
      updatedVehicle.vehicleNote = updatedVehicleNote;

      return updatedVehicle;
    }

    return vehicle;
  });
};

export const addNewVehicleToReducer = (vehicleArr, newVehicle) => {
  const newVehicleArr = [...vehicleArr, newVehicle];
  return newVehicleArr;
};

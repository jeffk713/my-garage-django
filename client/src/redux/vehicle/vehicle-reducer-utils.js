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

export const getVehiclesWithNewService = (vehicleArr, newService) => {
  return vehicleArr.map(vehicle => {
    if (+vehicle.id === +newService.vehicle) {
      const newVehicle = { ...vehicle };
      newVehicle.services = [newService, ...vehicle.services];
      return newVehicle;
    }
    return vehicle;
  });
};

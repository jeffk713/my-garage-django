export const getVehiclesWithUpdatedVehicleNote = (
  vehicleArr,
  updatedVehicleNote
) => {
  return vehicleArr.map(vehicle => {
    if (
      vehicle.vehicleNote &&
      vehicle.vehicleNote.vehicle === updatedVehicleNote.vehicle
    ) {
      const updatedVehicle = { ...vehicle };
      updatedVehicle.vehicleNote = updatedVehicleNote;

      return updatedVehicle;
    }

    return vehicle;
  });
};

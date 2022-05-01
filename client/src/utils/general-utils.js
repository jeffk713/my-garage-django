export const isVehicleOwnedByUser = (vehicleArr, vehicleId) => {
  for (let vehicle of vehicleArr) {
    if (+vehicle.id === +vehicleId) {
      return true;
    }
  }
  return false;
};

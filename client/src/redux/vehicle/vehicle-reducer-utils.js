import { getSortedServiceByDate } from '../../utils/data-utils';

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
      newVehicle.services = getSortedServiceByDate([
        newService,
        ...vehicle.services,
      ]);
      return newVehicle;
    }
    return vehicle;
  });
};

export const getVehiclesWithUpdatedService = (vehicleArr, updatedService) => {
  return vehicleArr.map(vehicle => {
    if (+vehicle.id === +updatedService.vehicle) {
      const newVehicle = { ...vehicle };
      const unsortedUpdatedServiceArr = newVehicle.services.map(service => {
        if (+service.id === +updatedService.id) {
          return updatedService;
        }
        return service;
      });
      newVehicle.services = getSortedServiceByDate(unsortedUpdatedServiceArr);

      return newVehicle;
    }
    return vehicle;
  });
};

export const getVehiclesWithoutDeletedService = (
  vehicleArr,
  deletedServiceIds
) => {
  return vehicleArr.map(vehicle => {
    if (+vehicle.id === +deletedServiceIds.vehicle) {
      const newVehicle = { ...vehicle };
      newVehicle.services = newVehicle.services.filter(
        service => +service.id !== +deletedServiceIds.id
      );
      return newVehicle;
    }
    return vehicle;
  });
};

export const getVehiclesWithUpdatedVehicle = (vehicleArr, updatedVehicle) => {
  return vehicleArr.map(vehicle => {
    if (vehicle.id === updatedVehicle.id) {
      return updatedVehicle;
    }
    return vehicle;
  });
};

export const getVehiclesWithoutDeletedVehicle = (vehicleArr, vehicleId) => {
  return vehicleArr.filter(vehicle => {
    if (vehicle.id === vehicleId) {
      return false;
    }
    return true;
  });
};

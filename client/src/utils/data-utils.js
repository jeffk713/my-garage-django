export const getMinMaxTireMeasurement = vehicleNote => {
  if (!vehicleNote) return null;

  const { lfTire, rfTire, lrTire, rrTire } = vehicleNote;
  const tireMeasurements = [+lfTire, +rfTire, +lrTire, +rrTire];
  return [Math.min(...tireMeasurements), Math.max(...tireMeasurements)];
};

export const getMinMaxBrakeMeasurement = vehicleNote => {
  if (!vehicleNote) return null;

  const { fBrake, rBrake } = vehicleNote;
  const brakeMeasurements = [+fBrake, +rBrake];
  return [Math.min(...brakeMeasurements), Math.max(...brakeMeasurements)];
};

export const getVehicleByVehicleId = (vehicles, vehicleId) =>
  vehicles.find(vehicle => vehicle.id === +vehicleId);

export const getNextAppointmentDate = nextAppointment => {
  if (!nextAppointment) return '';
  return nextAppointment.split('T')[0];
};

export const getNextAppointmentTime = nextAppointment => {
  if (!nextAppointment) return '';
  return nextAppointment.split('T')[1].split('Z')[0];
};

export const getNextAppointmetDateTime = (date, time) => {
  if (!date) return null;
  if (!time) return date;

  return `${date}T${time}`;
};

export const getFilteredYearServices = (serviceArr, filterYear) => {
  if (!+filterYear) return serviceArr;

  return serviceArr.filter(service => {
    const serviceDate = getNextAppointmentDate(service.serviceDate);
    const serviceYear = serviceDate.split('-')[0];
    if (serviceYear === filterYear) {
      return true;
    }

    return false;
  });
};

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

// helper
const getServiceYear = date => {
  const serviceDate = getNextAppointmentDate(date);
  return serviceDate.split('-')[0];
};

export const getServiceYears = serviceArr => {
  let curYear = 9000;
  const years = [];

  serviceArr.forEach(service => {
    const serviceYear = getServiceYear(service.serviceDate);
    if (serviceYear >= curYear) return;

    curYear = serviceYear;
    years.push(serviceYear);
  });

  return years;
};

export const getFilteredYearServices = (serviceArr, filterYear) => {
  if (!+filterYear) return serviceArr;

  return serviceArr.filter(service => {
    const serviceYear = getServiceYear(service.serviceDate);
    if (serviceYear === filterYear) {
      return true;
    }

    return false;
  });
};

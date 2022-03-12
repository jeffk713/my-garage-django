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

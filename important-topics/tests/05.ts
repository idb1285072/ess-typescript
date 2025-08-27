enum Type {
  Car = 1,
  Truck = 2,
  Motorcycle = 3,
}

type Specifications = {
  speed: number;
  capacity: number;
};

interface Vehicle {
  type: Type;
  specifications: Specifications;
}

function getVehicles(vehicles: Vehicle[], type: Type) {
  return vehicles.filter(vehicle => vehicle.type === type);
}

const vehicles: Vehicle[] = [
  { type: Type.Car, specifications: { speed: 23, capacity: 43 } },
  { type: Type.Motorcycle, specifications: { speed: 23, capacity: 43 } },
  { type: Type.Car, specifications: { speed: 23, capacity: 43 } },
  { type: Type.Truck, specifications: { speed: 23, capacity: 43 } },
  { type: Type.Motorcycle, specifications: { speed: 23, capacity: 43 } },
];

console.log(getVehicles(vehicles, Type.Car));
console.log(getVehicles(vehicles, Type.Truck));
console.log(getVehicles(vehicles, Type.Motorcycle));

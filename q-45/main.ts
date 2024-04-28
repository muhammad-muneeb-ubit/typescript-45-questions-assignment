
type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any; 
};

function carInfo(manufacturer: string, model: string, ...args: [string, any][]): Car {
    const car: Car = {
        manufacturer,
        model
    };

    args.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

const carDetails = carInfo("Toyota", "Camry", ["color", "red"], ["year", 2024]);
console.log(carDetails);

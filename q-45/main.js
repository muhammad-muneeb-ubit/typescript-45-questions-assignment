function carInfo(manufacturer, model, ...args) {
    const car = {
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
export {};

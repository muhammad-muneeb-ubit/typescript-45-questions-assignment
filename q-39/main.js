const res = function describeCity(cityName = "Karachi", countryName = "Pakistan") {
    return (`"${cityName},${countryName}" `);
};
console.log(res());
console.log(res("mumbai", "India"));
export {};

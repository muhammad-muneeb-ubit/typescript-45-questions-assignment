const res = function describeCity(cityName:String = "Karachi", countryName:String = "Pakistan" ) {
    return(`"${cityName},${countryName}" `);
};
console.log(res());
console.log(res("mumbai", "India"));

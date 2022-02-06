//console.log(myName);
//var myName = "Olga";
//console.log(myName);

// scope of variable
    for(let i = 0; i<5; i++){
    var city = "Winnipeg";
    let country = "Canada";
}

function printCity()
{
    let country = "India";
    console.log(city);
    city = "Boaston";
    console.log(country);
    var address = "turnstone";
}

printCity();
console.log(city);
console.log(address);
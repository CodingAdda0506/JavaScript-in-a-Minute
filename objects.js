/*
    Objects in JavaScript
*/

const car = {
    madeBy: 'Nissan',
    model: 'Silvia s15',
    engine: 'inline-four engine',
    transmission: '5-speed manual',
    driveType: 'RWD',
    topSpeed: '225-250 km/h',
    weight: () => {
        console.log('1,200-1,400 kg');
    }
}

console.log(car.madeBy);
console.log(car.model);
console.log(car.engine);
console.log(car.transmission);
console.log(car.driveType);
console.log(car.topSpeed);
car.weight();
// args object - no longer bound

const add = (a,b) => {
    return a + b;
};
console.log(add(55,1, 1001));

// this keyword is no longer bound w arrow functions

const user = {
    name: 'Johnny',
    cities: ['Portland', 'Seattle', 'Chicago', 'LA', 'San Francisco', 'El Paso', 'Denver', 'Salt Lake City', 'NYC'],
    printPlacesBeen() {
        return this.cities.map((city) => this.name + ' has been to ' + city + '.');
    }
};

let x = Math.floor(Math.random() * 9 + 1);
console.log(x);
console.log(user.printPlacesBeen()[x]);

const multiplier = {
    numbers: [10,20,30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
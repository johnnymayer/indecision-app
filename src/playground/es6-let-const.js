var nameVar = 'Johnny';
var nameVar = 'Number 2';
console.log('nameVar: ', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet: ', nameLet);

const nameConst = 'Frank';
console.log('nameConst: ', nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping: let, const are block scoped.

const fullName = 'Johnny Mayer';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
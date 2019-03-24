// primitivni datove typy --- string, number, boolean, null, undefined, symbol

let name = "Marcel";
let age = 28;
let isWarm = false;
let rating = 8.2;
const empty = null;
const NA = undefined;
let z;

console.log(typeof z);

// concatenation -- znamena navazovani -> string prida dalsi string.. cesky: hodnota retezce se prida k jine a tim vynikne novy string

let jmeno = "Marcel";
let mezera = " ";
let prijmeni = "Konjata";
let fullName = jmeno + mezera + prijmeni;
console.log(fullName);
console.log(`my name is ${jmeno} and surname ${prijmeni}`);
// output je Marcel Konjata;
console.log(fullName.length);

let seznamJakoString = "matika, erotika, lingvistika, technika";

console.log(seznamJakoString.split(", "));

// array --- pole, promenna co obsahuje nekolik hodnot
/* deklarace let[] pole = new let[5] NEEXISTUJE
spravne to je deklarovane takto: */

const cisla = new Array(1, 2, 3, 4, 5); // ---> tady kurva bacha od C# se to hodne lisi pri deklaraci;

const person = {
  firstname: "John",
  lastName: "Doe",
  age: 30,
  hobbies: new Array("music", "dance", "moneeeyyy")
};

console.log(person.hobbies[2]);

function addNumbers(number1, number2) {
  console.log(number1 + number2);
}
addNumbers(1, 8);

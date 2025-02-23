// const student = {
//   fullName: "Saqib",
//   marks: 90.74,
//   printMarks: function () {
//     console.log("Saqib's marks are", this.marks); //"this" refers to the this object
//   },
// };

// // making our own prototype and using it
// const players = {
//   tax() {
//     console.log(`He pays the ${this.taxPay}`);
//   },
// };

// const management = {
//   mng: "Sorted",
// };

// management.__proto__ = players;

// // if object and prototype got same method the object will use objects' method

// // for instance

// //prototype object
// const finance = {
//   pays() {
//     console.log("the pays are done");
//   },
// };

// // object
// const recive = {
//   pays() {
//     console.log("the pays are recieved");
//   },
// };

// recive.__proto__ = finance;

// // Classes

// class bikes {
//   func() {
//     console.log("the color should be Black");
//   }
// }

// let honda = new bikes();

// // new

// class models {
//   walk() {
//     console.log("walked area");
//   }
// }

// let saqib = new models();

// // new start
// class centre {
//   set(brand) {
//     this.api = brand;
//   }
// }

// let logo = new centre();

//Blue print
class car {
  constructor(brand, condition, model, carType) {
    this.brand = brand;
    this.condition = condition;
    this.model = model;
    this.carType = carType;
  }
}

// objects (first add obj then set properties)
let corolla = new car("corolla", "New", "2024", "Auto");
let suzuki = new car("suzuki", "Used", "2020", "Manual");

// constructor 2nd

class laptop {
  constructor(cpu, ram, model, condition, storage) {
    this.cpu = cpu;
    this.ram = ram;
    this.model = model;
    this.condition = condition;
    this.storage = storage;
  }
  showDetails() {
    console.log(
      `Cpu: ${this.cpu} Ram: ${this.ram} Model: ${this.model} Condition: ${this.condition} Storage: ${this.storage}`
    );
  }
}

let dell = new laptop("i5", "16gb", "2024", "new", "512gb ssd");

let hp = new laptop("i7", "8gb", "2020", "old", "1tb ssd");

// inheritance

class mobile {
  constructor(model, condition, os) {
    this.model = model;
    this.condition = condition;
    this.operatingSystem = os;
  }
  showDetails() {
    console.log(
      `Model: ${this.model} Condition: ${this.condition} Operating System : ${this.operatingSystem}`
    );
  }
}

// android

class Android extends mobile {
  constructor(model, condition, os, security) {
    super(model, condition, os);
    this.security = security;
  }

  showOs() {
    console.log(
      `Model: ${this.model} Condition: ${this.condition} Operating System : ${this.operatingSystem}`
    );
  }
}

let zeroX = new Android("Infnix", "New", "Android", "A++");

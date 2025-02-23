const student = {
  fullName: "Saqib",
  marks: 90.74,
  printMarks: function () {
    console.log("Saqib's marks are", this.marks); //"this" refers to the this object
  },
};

// making our own prototype and using it
const players = {
  tax() {
    console.log(`He pays the ${this.taxPay}`);
  },
};

const management = {
  mng: "Sorted",
};

management.__proto__ = players;

// if object and prototype got same method the object will use objects' method

// for instance

//prototype object
const finance = {
  pays() {
    console.log("the pays are done");
  },
};

// object
const recive = {
  pays() {
    console.log("the pays are recieved");
  },
};

recive.__proto__ = finance;

// Classes

class bikes {
  func() {
    console.log("the color should be Black");
  }
}

let honda = new bikes();

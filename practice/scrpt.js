class user {
  constructor(name, email) {
    this.name = name;
    this.email;
  }
  viewData() {
    console.log(`Name:${this.name} and Email ${this.email}`);
  }
}
let std1 = new user("hammad", "abc@gmail.com");
let std2 = new user("saqib", "123@gmail.com");

class admin extends user {
  constructor(name, email, editData) {
    super(name, email);
    this.editData;
  }
  editData() {}
}

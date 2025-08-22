class User {
  private id: number = 0;
  private firstName: string = '';
  private lastName: string = '';
  set setId(id: number) {
    this.id = id;
  }
  set setFirstName(firstName: string) {
    this.firstName = firstName.toUpperCase();
  }
  set setLastName(lastName: string) {
    this.lastName = lastName.toUpperCase();
  }
  get getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const user1 = new User();
user1.setId = 4;
user1.setFirstName = 'raj';
user1.setLastName = 'khan';
console.log(user1);
console.log(user1.getFullName);

export const user = {
   firstName: "John",
   lastName: "Doe",
   getFullName () {
      return `${this.firstName} ${this.lastName}`;
   },
   setFullName (fullName) {
      let splitedFullName = fullName.split(" ");
      this.firstName = splitedFullName[0];
      this.lastName = splitedFullName[1];
   }
};
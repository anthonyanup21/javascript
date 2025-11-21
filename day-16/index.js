let user = {
  firstName: "Anup",
  age: 21,
  address: {
    city: "Mysore",
    country: "India"
  }
};

const {address:{city,country}}=user
console.log(city)//Mysore
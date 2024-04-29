function User(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

User.prototype.getInfo = () => {
    return {
        name: this.name,
        age: this.age,
        city: this.city
    }
}

const user = new User("Діма", 19, "Краків");

console.log(user);
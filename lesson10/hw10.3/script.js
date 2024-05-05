const contacts = [
    {
        name: "Serhii",
        phone: "+380999999999",
        email: "example@email.com",
    },
];

function Contact({ name, phone, email }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
}

function Book(contacts) {
    this.contacts = contacts;
}

Book.prototype.find = function (name) {
    const contact = this.contacts.find((key) => key.name === name);

    if (!contact) return null;
    return contact;
};

Book.prototype.add = function (contact) {
    this.contacts.push(contact);
    return this;
};

const mappedContacts = contacts.map((key) => {
    return new Contact(key);
});

const book = new Book(mappedContacts);

book.add(new Contact({
    name: "Dima", 
    phone: "+4800000000", 
    email: "baladima@gmail.com"
}))

console.log(book);

console.log(book.find("Dima"));
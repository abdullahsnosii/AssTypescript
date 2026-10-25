"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    _password;
    phone;
    age;
    _notebooks = [];
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get notebooks() {
        return this._notebooks;
    }
    set notebooks(value) {
        this._notebooks = value;
    }
    constructor(id, name, email, _password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this._password = _password;
        this.phone = phone;
        this.age = age;
        const ageValue = age.valueOf();
        if (ageValue < 18 || ageValue > 60) {
            throw new Error("Age must be between 18 and 60");
        }
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Age: ${this.age}`);
    }
}
class Admin extends User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    manageNotes() {
        console.log(`Admin ${this.name} is managing notes`);
    }
}
class Note {
    id;
    title;
    content;
    author;
    userId;
    constructor(id, title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.userId = author.id;
    }
    preview() {
        return this.content.length;
    }
}
class NoteBook {
    name;
    numberPaper;
    notes = [];
    constructor(name, numberPaper) {
        this.name = name;
        this.numberPaper = numberPaper;
    }
    addNote(id, title, content, author) {
        const note = new Note(id, title, content, author);
        this.notes.push(note);
    }
    removeNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
    }
}
const user1 = new User(1, "abdullah", "abdullah@gmail.com", "12345", "01002222222", 22);
user1.displayInfo();
const admin1 = new Admin(2, "snosii", "snosii@gmail.com", "11111", "01001111111", 19);
admin1.displayInfo();
admin1.manageNotes();
const notebook1 = new NoteBook("abdullah", 200);
notebook1.addNote(1, "Shopping", "Buy milk, eggs and bread", user1);
console.log(notebook1);
user1.addNotebook(notebook1);
console.log(user1.notebooks);
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }
    getAllItems() {
        return this.items;
    }
}
const numbers = new Storage();
numbers.addItem(10);
numbers.addItem(20);
console.log(numbers.getAllItems());
numbers.removeItem(10);
console.log(numbers.getAllItems());

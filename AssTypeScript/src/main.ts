

class User {


    private _notebooks: NoteBook[] = [];



    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
   
    public get notebooks(): NoteBook[] {
        return this._notebooks;
    }
    public set notebooks(value: NoteBook[]) {
        this._notebooks = value;
    }


    constructor(
        public id: number,
        public name: string,
        public email: string,
        private _password: string,
        public phone: string,
        public age: Number

    ) {

        const ageValue = age.valueOf();
        if (ageValue < 18 || ageValue > 60) {
            throw new Error("Age must be between 18 and 60");
        }
    }



    addNotebook(notebook: NoteBook) {
        this.notebooks.push(notebook);
    }

    displayInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Age: ${this.age}`);
    }
}


class Admin extends User {

    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        phone: string,
        age: Number

    ) {
        super(id, name, email, password, phone, age)
    }
    manageNotes(): void {
        console.log(`Admin ${this.name} is managing notes`);
    }
}

class Note {
    public userId: number;

    constructor(
        public id: number,
        public title: string,
        public content: string,
        public author: User
    ) {
        this.userId = author.id;
    }

    preview(): number {
        return this.content.length;
    }
}




class NoteBook {
    private notes: Note[] = [];

    constructor(public name: string, public numberPaper: number) { }

    addNote(id: number, title: string, content: string, author: User): void {
        const note = new Note(id, title, content, author);
        this.notes.push(note);
    }

    removeNote(id: number): void {
        this.notes = this.notes.filter(note => note.id !== id);
    }

}
const user1 = new User(1, "abdullah", "abdullah@gmail.com", "12345", "01002222222", 22)  // test class user
user1.displayInfo()

const admin1 = new Admin(2, "snosii", "snosii@gmail.com", "11111", "01001111111", 19) // test class admain
admin1.displayInfo()
admin1.manageNotes()




const notebook1 = new NoteBook("abdullah", 200);                      // test class  NoteBook and relation  composition
notebook1.addNote(1, "Shopping", "Buy milk, eggs and bread", user1);
console.log(notebook1);


user1.addNotebook(notebook1)      // test relation aggregation
console.log(user1.notebooks)




 // generics
class Storage<T> { 
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(item: T): void {
    this.items = this.items.filter(i => i !== item);
  }

  getAllItems(): T[] {
    return this.items;
  }
}


const numbers = new Storage<number>();   // generics class test 
numbers.addItem(10);
numbers.addItem(20);
console.log(numbers.getAllItems());  
numbers.removeItem(10);
console.log(numbers.getAllItems());   

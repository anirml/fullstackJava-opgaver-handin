let http = require("http");

interface IBook {title:string, readonly author:String, published:Date, pages:number}

let book1:IBook = {title:"Bogen 1", author:"Lars Hansen", published: new Date(), pages:12}

function book(a:IBook){
    console.log(JSON.stringify(a))
}

class Book1 implements IBook {
    constructor(private _title:string,private _author:string,private _published:Date,private _pages:number){};
    get title(){return this._title}
    get author(){return this._author}
    get published(){return this._published}
    get pages(){return this._pages}
}

const b = new Book1("Bog 2", "Joe", new Date(), 34)

book(book1)
book(b)


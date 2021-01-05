"use strict";
let http = require("http");
let book1 = { title: "Bogen 1", author: "Lars Hansen", published: new Date(), pages: 12 };
function book(a) {
    console.log(JSON.stringify(a));
}
class Book1 {
    constructor(_title, _author, _published, _pages) {
        this._title = _title;
        this._author = _author;
        this._published = _published;
        this._pages = _pages;
    }
    ;
    get title() { return this._title; }
    get author() { return this._author; }
    get published() { return this._published; }
    get pages() { return this._pages; }
}
const b = new Book1("Bog 2", "Joe", new Date(), 34);
book(book1);
book(b);
//# sourceMappingURL=interfaces1.js.map
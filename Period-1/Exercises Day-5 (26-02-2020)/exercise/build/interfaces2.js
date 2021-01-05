"use strict";
//b)
let strArray = (str1, str2, str3) => {
    return [str1, str2, str3];
};
console.log(strArray('test1', 'test2', 'test3'));
//c)
let strArrayUpper = (str1, str2, str3) => {
    return [str1.toLocaleUpperCase(), str2.toLocaleUpperCase(), str3.toLocaleUpperCase()];
};
console.log(strArrayUpper('test1', 'test2', 'test3'));
//d)
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
};
//e)
f2(strArray);
f2(strArrayUpper);
//f)
//# sourceMappingURL=interfaces2.js.map
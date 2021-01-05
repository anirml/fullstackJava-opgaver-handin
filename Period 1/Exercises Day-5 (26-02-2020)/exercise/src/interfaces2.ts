
//a)
interface myFunc {(str1:string, str2:string, str3:string): string[];}

//b)
let strArray: myFunc = (str1:string, str2:string, str3:string) => {
    return [str1,str2,str3]
}
console.log(strArray('test1','test2','test3'))

//c)
let strArrayUpper: myFunc = (str1:string, str2:string, str3:string) => {
    return [str1.toLocaleUpperCase(),str2.toLocaleUpperCase(),str3.toLocaleUpperCase()]
}
console.log(strArrayUpper('test1','test2','test3'))

//d)
let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}
//e)
f2(strArray)
f2(strArrayUpper)

//f)


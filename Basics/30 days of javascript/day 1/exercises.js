/**
 * 1.Write a single line comment which says, comments can make code readable
 * 2.Write another single comment which says, Welcome to 30DaysOfJavaScript
 * 3.Write a multiline comment which says, comments can make code readable, easy to reuse and informative
 * 4.Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
 * 5.Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
 * 6.Declare four variables without assigning values
 * 7.Declare four variables with assigned values
 * 8.Declare variables to store your first name, last name, marital status, country and age in multiple lines
 * 9.Declare variables to store your first name, last name, marital status, country and age in a single line
 * 10/Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
 */

// 1. this is a single line
// 2.  Welcome to 30DaysOfJavaScript
/**3.
 * this is a 
 * multiline comment
 */

console.log("4.");
let string1,boolean1,undefined1,null1;
string1 ="hello world";
boolean1 = true;
undefined1 = undefined;
null1 = null;

console.log(string1,boolean1,undefined1,null1);

console.log("5.");
console.log(typeof string1,typeof boolean1,typeof undefined1, typeof null1);

console.log("6. & 7.")
let var1,var2,var3,var4;
let var5 = 1, var6 = 2 ,var7 = 3, var8 =4;
console.log(var1,var2,var3,var4);
console.log(var5,var6,var7,var8);

console.log("8. & 9.");
let fname = "Aziz";
let lname = "Mohamud";
let mstatus = "Single";
let age = 30;

console.log(fname,lname,mstatus,age);
let fname2 = "Aziz",lname2 = "Mohamud",mstatus2 = "Single",age2 = 30;
console.log(fname2,lname2,mstatus2,age2);

console.log("10.");
let myAge = 30,yourAge =40;
console.log(myAge,yourAge);
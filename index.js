//Homework 10.1
let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
let validEmails = [], notValidEmails = [];
const regExp1 = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/;
arr.forEach(element => {
    element.email.search(regExp1) === 0
    ? validEmails.push(element.email)
    : notValidEmails.push(element.email)
});
console.log("Homework 10.1");
console.log("Валідні адреси: ", validEmails);
console.log("Не валідні адреси: ", notValidEmails);
console.log("- - - - - - - - - - - - - - -");

//Homework 10.2;
const stringArr = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];
const regExp2 = /^[^aA]{6,}/;
let validStrings = [];

stringArr.forEach(element => {
    if (regExp2.test(element)) validStrings.push(element);
})
console.log("Homework 10.2");
console.log("Валідні значення: ", validStrings);
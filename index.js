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
let regExp = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/;
arr.forEach(element => {
    element.email.search(regExp) === 0
    ? validEmails.push(element.email)
    : notValidEmails.push(element.email)
});
console.log("Валідні адреси: ", validEmails);
console.log("Не валідні адреси: ", notValidEmails);
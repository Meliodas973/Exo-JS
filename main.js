// 2
let contact1 = new Contact ('Bourgeois', 'Yoan', 'y.bourgeois@email.com')
console.log(contact1);

let contact2 = new Contact ('Siong2', 'Toubon2', 'toubon@email.com')
console.log(contact2);

let contact3 = new Contact ('Siong3', 'Toubon3', 'toubonemail.com')
console.log(contact3);

let contact4 = new Contact ('Siong4', 'Toubon4', 'toubon@emailcom')
console.log(contact4);

contact1.displayInfo()

let manager = new ContactManager ()
manager.displayMenu();
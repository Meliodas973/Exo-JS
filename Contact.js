// 1 - Créer une Classe Contact 

class Contact {
    constructor(nom, prenom, email) {
       this.nom = nom;
       this.prenom = prenom; 
       this.email = email;
    }   
}
console.log(Contact)

// 3 - Fiche d'information du Contact

let contact = displayInfo(
    "Antonio",
    "Aurélien", 
    "email: contact@aurelienantonio.com");

console.log(displayInfo);
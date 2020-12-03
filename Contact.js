// 1 - Créer une Classe Contact 

class Contact {
    constructor(nom, prenom, email) {
       this.nom = nom;
       this.prenom = prenom; 
       this.email = email;
    }  
    

    // 3 - Fiche d'information du Contact

    displayInfo = () => {
        console.log(this.nom + ' ' + this.prenom + ' ' + this.email);
    }
}

let contact = new Contact ('Antonio', 'Aurélien', 'email: contact@aurelienantonio.com')

console.log(contact)
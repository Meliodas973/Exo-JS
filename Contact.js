// 1 - Créer une Classe Contact 

class Contact {
    constructor(nom, prenom, email) {
       this.nom =  this.isStringOk(nom) ? nom : this.setString("nom");
       this.prenom = prenom; 
       this.email = email;
       this.isStringOk(nom);
       this.isStringOk(prenom);
       this.isEmailOk(email);
    }  
    

    // 3 - Fiche d'information du Contact // à été aider mais ne comprends pas trop

    displayInfo = () => {
        console.log(' nom: ' + this.nom + ' prenom: ' + this.prenom + ' email: ' + this.email);
    }

    // fonction qui verifie si la chaine de caractères à plus de 2 characteres
    // doit recevoir une chaine de caracteres
    // doit renvoyer si ok ou non
    isStringOk = (entry) => {
        // regarder si chaine de caractères plus grande que 2 lettres
            // si oui => ok 
            // si non => Pas ok 
        if (entry.length >= 2) {
            console.log(`${entry} is ok`) // usage de template string
            return true;
        }
        console.warn(`${entry} is too short`)
        return false;
    }

    setString(name){
        let str = prompt(`Entrer un ${name} de 2 caractères ou plus`);
        if(this.isStringOk(str)){
            return str;
        }else{
            return this.setString(name);
        }
    }

    isEmailOk = (email) => {
        var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
        console.log("email", reg.test(email));
        return(reg.test(email));
    }
}



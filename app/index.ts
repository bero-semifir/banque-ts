import { Client } from "./classes/Client";
import { Compte } from "./classes/Compte";
import { CompteASeuil } from "./classes/CompteASeuil";
import { CompteASeuilRemunere } from "./classes/CompteASeuilRemunere";
import { CompteRemunere } from "./classes/CompteRemunere";

const benoit = new Client("Routier", "Benoît", 27);

const compteCourant = new Compte();
const compteBloque = new CompteASeuil(100);
const livretA = new CompteRemunere(0.071);
const casr = new CompteASeuilRemunere(0.1, 0);

benoit.ajouterCompte(compteCourant);
benoit.ajouterCompte(compteBloque);
benoit.ajouterCompte(livretA);
benoit.ajouterCompte(casr);

// Pour le test j'ajoute 50€ sur tous les comptes
benoit.comptes.forEach((compte: Compte)=> {
    compte.ajouter(50);
})

console.log(benoit);

// versement des intérets pour chacun des comptes rémunérés
benoit.comptes.forEach((compte)=>{
    if(compte instanceof CompteRemunere){
        compte.verserInterets();
    }
})

console.log(benoit);
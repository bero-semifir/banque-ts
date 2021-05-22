import { v4 as uuid } from "uuid";

export class Compte {

    protected _numero: number;
    protected static _nbCompte: number;
    protected _solde: number;

    constructor(){
        // utilisation du mot clé static pour compter le nombre d'instances de Comptes.
        this._numero = Compte._nbCompte;
        this._solde = 0;
    }

    public get numero(): number {
        return this._numero;
    }

    public get solde(): number {
        return this._solde;
    }

    /**
     * Ajouter de l'argent au compte
     * @param unMontant à ajouter
     */
    public ajouter(unMontant: number): void{
        this._solde += unMontant;
    }

    /**
     * Retire de l'argent du compte
     * @param unMontant à retirer
     */
    public retirer(unMontant: number): void {
        this._solde -= unMontant;
    }
}
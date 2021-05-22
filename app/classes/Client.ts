import { v4 as uuid } from "uuid";
import { Compte } from "./Compte";

export class Client {

    private _numero: string;

    private _nom: string;

    private _prenom: string;

    private _age!: number;

    private _comptes: Compte[] = new Array<Compte>(5);

    constructor(nom: string, prenom: string, age: number){
        this._numero = uuid();
        this._nom = nom;
        this._prenom = prenom;
        this.setAge(age);
    }

    public get numero(): string {
        return this._numero;
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    public get prenom(): string {
        return this._prenom;
    }
    public set prenom(value: string) {
        this._prenom = value;
    }

    public get age(): number {
        return this._age;
    }

    public get comptes(): Compte[]{
        return this._comptes
    }

    public setAge(age: number) {
        if(age > 18 && age < 120){
            this._age = age;
        }else {
            console.log("L'age n'est pas valide");
        }
    }

    /**
     * Ajoute un compte au Client.
     * @param compte à ajouter
     */
    public ajouterCompte(compte: Compte): void {
        for (let i = 0; i < this.comptes.length; i++) {
            if(this.comptes[i] == null){
                this.comptes[i] = compte;
                return;
            };
        }
        console.log("Le client a déja 5 comptes")
    }

    /**
     * Récupére un compte à partir de son numéro.
     * @param numero du compte a récupérer
     */
    public getCompte(numero: number): Compte | null {
        for (let i = 0; i < this.comptes.length; i++) {
            if(this.comptes[i].numero == numero){
                return this.comptes[i]
            }
        }
        console.log("le compte n'existe pas");
        return null
    }

    public getComptes(): Compte[]{
        return this._comptes
    }
}
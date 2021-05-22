import { v4 as uuid } from "uuid";

export class Compte {

    protected _numero: string;

    protected _solde: number;

    constructor(){
        this._numero = uuid();
        this._solde = 0;
    }

    public get numero(): string {
        return this._numero;
    }

    public get solde(): number {
        return this._solde;
    }

    public ajouter(unMontant: number): void{
        this._solde += unMontant;
    }

    public retirer(unMontant: number): void {
        this._solde -= unMontant;
    }
}
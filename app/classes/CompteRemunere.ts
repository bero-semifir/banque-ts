import { Compte } from "./Compte";
import { ICompteRemunere } from "../interfaces/CompteRemunere";

export class CompteRemunere extends Compte implements ICompteRemunere {

    private _taux!: number;

    constructor(taux: number){
        super();
        this.setTaux(taux);
    }

    public getTaux(): number {
        return this._taux;
    }
    public setTaux(value: number) {
        if(value > 0 && value < 1){
            this._taux = value;
        }
    }

    public calculerInterets(): number{
        return this.solde + this.solde*this.getTaux();
    }

    public verserInterets(): void {
        this._solde += this.calculerInterets();
    }
}
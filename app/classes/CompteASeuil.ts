import { Compte } from "./Compte";
import { ICompteASeuil } from '../interfaces/CompteASeuil'

export class CompteASeuil extends Compte implements ICompteASeuil {

    private _seuil!: number;

    constructor(seuil: number){
        super();
        this.seuil = seuil;
    }
    getSeuil(): number {
        return this._seuil;
    }
    setSeuil(seuil: number): void {
        this._seuil = seuil;
    }

    public get seuil(): number {
        return this._seuil;
    }
    public set seuil(seuil: number) {
        this._seuil = seuil;
    }

    /**
     * Retire une somme du compte sans dépasser le seuil
     * @override
     * @param montant à retirer
     */
    public retirer(unMontant: number): void {
        if(this.solde - unMontant > this.seuil){
            super.retirer(unMontant);
        }else{
            console.log("Le retrait dépasse le seuil, retrait refusé");
        }
        
    }
    

}
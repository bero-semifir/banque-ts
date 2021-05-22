import { ICompteASeuil } from "../interfaces/CompteASeuil";
import { CompteRemunere } from "./CompteRemunere";

export class CompteASeuilRemunere extends CompteRemunere implements ICompteASeuil {

    private seuil!: number;

    constructor(taux: number, seuil: number){
        super(taux);
        this.setSeuil(seuil);
    }
    
    getSeuil(): number {
        return this.seuil;
    }
    setSeuil(seuil: number): void {
        this.seuil = seuil;
    }

    /**
     * Retire une somme du compte sans dépasser le seuil
     * @override
     * @param montant à retirer
     */
    public retirer(montant: number): void {
        if(this.solde - montant >= this.seuil){
            this.retirer(montant);
        }else{
            console.log('Le retrait dépasse le seuil');
        }
    }

}
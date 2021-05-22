export interface ICompteASeuil {
    retirer(unMontant: number): void;
    getSeuil(): number;
    setSeuil(seuil: number): void;
}
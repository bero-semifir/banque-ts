export interface ICompteRemunere {
    calculerInterets(): number;
    verserInterets(): void;
    getTaux(): number;
    setTaux(unMontant: number): void;
}
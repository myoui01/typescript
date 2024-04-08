import { Times } from "./times.model";

const timesCampeonatoBrasileiro: Array<Times> = [
    new Times('Flamengo', 32),
    new Times('Palmeiras', 28),
    new Times('Atlético Mineiro', 30),
    new Times('Fortaleza', 25),
    new Times('Bragantino', 27),
    new Times('Corinthians', 22),
    new Times('Fluminense', 26),
    new Times('Santos', 21)
];

export class OrdenarTimes {
    private listaTimes: Array<Times>;

    constructor() {
      this.listaTimes = new Array<Times>();
    } 
    
    public ordenarTimes(times: Array<Times>): void { 
        this.listaTimes = times.slice(); 
        this.listaTimes.sort((a, b) => b.getPontos() - a.getPontos());
    }

    public getAll(): Array<Times> {
        return this.listaTimes;
    }
}

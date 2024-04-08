
export class Times {
    private nome: string;
    private pontos: number;
   
    constructor(nome: string, pontos: number) {
        this.nome = nome;
        this.pontos = pontos;
    }
    
    public getNome(): string {
        return this.nome;
    }
    
    public setNome(nome: string) {
        this.nome = nome;
    }

    public getPontos(): number {
        return this.pontos;
    }
    
    public setPontos(pontos: number) {
        this.pontos = pontos;
    }

    public toString() {
        return `nome: ${this.nome}, pontos: ${this.pontos}`;
    }

    setTimes(times: Times) {
        this.nome = times.nome;
        this.pontos = times.pontos;
    }
}
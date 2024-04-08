export class Animal {   
    private id: number;
    private nome: string;
    private especie: string;
    private peso: number;
    private idade: number;
    private raca: string;
    
    constructor(id: number, nome: string, especie: string, peso: number, idade: number, raca: string) {
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.peso = peso;
        this.idade = idade;
        this.raca = raca;
    }
    
    public getId(): number {
        return this.id;
    }

    public setId(id:number) {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome:string) {
        this.nome = nome;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(especie:string) {
        this.especie = especie;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(peso:number) {
        this.peso = peso;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade:number) {
        this.idade = idade;
    }

    public getRaca(): string {
        return this.raca;
    }

    public setRaca(raca:string) {
        this.raca = raca;
    }

    public toString() {
        return `id: ${this.id}, nome: ${this.nome}, especie: ${this.especie}, peso: ${this.peso}, idade: ${this.idade}, raca: ${this.raca}`;
    }

    setAnimais(animais: Animal) {
        this.id = animais.id;
        this.nome = animais.nome;
        this.especie = animais.especie;
        this.peso = animais.peso;
        this.idade = animais.idade;
        this.raca = animais.raca;
    }
}

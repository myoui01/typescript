export class Pedido {   
    private id: number;
    private nome: string;
    private valor: number;
    private data: string;
    
    constructor(id: number, nome: string, valor: number, data: string) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.data = data;
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

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor:number) {
        this.valor = valor;
    }

    public getData(): string {
        return this.data;
    }

    public setData(data:string) {
        this.data = data;
    }

    public toString() {
        return `id: ${this.id}, nome: ${this.nome}, valor: ${this.valor}, data: ${this.data}`;
    }
  
    setPedido(pedido: Pedido) {
        this.id = pedido.id;
        this.nome = pedido.nome;
        this.valor = pedido.valor;
        this.data = pedido.data;
    }
}
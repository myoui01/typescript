import { Cliente } from "./cliente";

export class Atendimento {
    private id: number;
    private cliente: Cliente;
    private data: string;
    private servico: string;
    private valor: number;
  
    constructor(id: number, cliente: Cliente, data: string, servico: string, valor: number) {
      this.id = id;
      this.cliente = cliente;
      this.data = data;
      this.servico = servico;
      this.valor = valor;
    }
  
    // Getters e setters
    public getId(): number {
      return this.id;
    }
  
    public setId(id: number): void {
      this.id = id;
    }
  
    public getCliente(): Cliente {
      return this.cliente;
    }
  
    public setCliente(cliente: Cliente): void {
      this.cliente = cliente;
    }
  
    public getData(): string {
      return this.data;
    }
  
    public setData(data: string): void {
      this.data = data;
    }
  
    public getServico(): string {
      return this.servico;
    }
  
    public setServico(servico: string): void {
      this.servico = servico;
    }
  
    public getValor(): number {
      return this.valor;
    }
  
    public setValor(valor: number): void {
      this.valor = valor;
    }
}
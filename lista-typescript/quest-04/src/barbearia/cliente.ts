export class Cliente {
    private id: number;
    private nome: string;
    private cpf: string;
    private telefone: string;
    private email: string;
  
    constructor(id: number, nome: string, cpf: string, telefone: string, email: string) {
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.telefone = telefone;
      this.email = email;
    }
  
    // Getters e setters
    public getId(): number {
      return this.id;
    }

    public setId(id: number): void {
      this.id = id;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public setNome(nome: string): void {
      this.nome = nome;
    }
  
    public getCpf(): string {
      return this.cpf;
    }
  
    public setCpf(cpf: string): void {
      this.cpf = cpf;
    }
  
    public getTelefone(): string {
      return this.telefone;
    }
  
    public setTelefone(telefone: string): void {
      this.telefone = telefone;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public setEmail(email: string): void {
      this.email = email;
    }
}
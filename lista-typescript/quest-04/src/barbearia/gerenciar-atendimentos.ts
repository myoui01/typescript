import { Atendimento } from "./atendimento";

export class GerenciarAtendimentos {
  private listaAtendimentos: Array<Atendimento> = [];
  private proximoId: number = 1;

  public cadastrarAtendimento(atendimento: Atendimento): Atendimento {
    atendimento.setId(this.proximoId++);
    this.listaAtendimentos.push(atendimento);
    console.log("Atendimento cadastrado com sucesso!");

    return atendimento;
  }

  public pesquisarAtendimento(data: string): Array<Atendimento> {
    return this.listaAtendimentos.filter((atendimento) => atendimento.getData() === data);
  }

  public listarAtendimento(): Array<Atendimento> {
    return this.listaAtendimentos;
  }

  public deletarAtendimento(id: number): void {
    const index = this.listaAtendimentos.findIndex((atendimento) => atendimento.getId() === id);
    if (index !== -1) {
      this.listaAtendimentos.splice(index, 1);
      console.log("Atendimento deletado com sucesso!");
    } else {
      console.log("Atendimento não encontrado.");
    }
  }

  public getAll(): Array<Atendimento> {
    return this.listaAtendimentos;
  }
}

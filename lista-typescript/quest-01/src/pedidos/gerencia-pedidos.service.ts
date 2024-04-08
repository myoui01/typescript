import { Pedido } from "./pedido.model";

export class GerenciaPedidos {
    private listaPedidos: Array<Pedido>;

    constructor() {
      this.listaPedidos = new Array<Pedido>();
    } 
    
    public cadastrarPedido(pedido: Pedido): Pedido {
      pedido.setId(this.listaPedidos.length+1);
      this.listaPedidos.push(pedido);
      console.log("Pedido cadastrado com sucesso!");

      return this.listaPedidos[this.listaPedidos.length-1];
    }

    public deletarPedido(id: number): void {
      const index = this.listaPedidos.findIndex((pedido) => pedido.getId() === id);
      if (index !== -1) {
        this.listaPedidos.splice(index, 1);
        console.log(`Pedido com ID ${id} foi deletado com sucesso!`);
      } else {
        console.log(`Pedido com ID ${id} não encontrado.`);
      }
    }
    
    public atenderProximoPedido(): Pedido | null {
      if (this.listaPedidos.length === 0) {
        console.log("Não há pedidos pendentes.");
        return null;
      }

      const proximoPedido = this.listaPedidos.shift();
      console.log(`Pedido atendido: ${proximoPedido?.getNome()}`);
      return proximoPedido || null;
    }

    public getAll(): Array<Pedido> {
        return this.listaPedidos;
    }
}

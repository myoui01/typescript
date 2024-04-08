/*
Deve ter uma lista do tipo Cliente chamada listaClientes.
*/

import { Cliente } from "./cliente";

export class GerenciarClientes {
    private listaClientes: Array<Cliente>;

    constructor() {
      this.listaClientes = new Array<Cliente>();
    }
    
    /* Cadastrar um novo cliente */

    public cadastrarCliente(cliente: Cliente): Cliente {
        cliente.setId(this.listaClientes.length+1);
        this.listaClientes.push(cliente);
        console.log("Cliente cadastrado com sucesso!");
  
        return this.listaClientes[this.listaClientes.length-1];
    }


    // Pesquisar cliente por cpf. Deve retornar a posição em que o cliente está armazenado no array.
    public pesquisarCliente(cpf: string): number {
        for (let i = 0; i < this.listaClientes.length; i++) {
            if (this.listaClientes[i].getCpf() === cpf) {
                return i;
            }
        }
        return -1; 
    }

    // Editar dados de um determinado cliente
    public editarCliente(cliente: Cliente): Cliente {
        const index = this.pesquisarCliente(cliente.getCpf());
        if (index !== -1) {
            this.listaClientes[index] = cliente;
            console.log("Cliente editado com sucesso!");
            return cliente;
        } else {
            console.log("Cliente não encontrado.");
            return cliente;
        }
    }

    // Exibir lista de clientes cadastrados
    public listarClientes(): Array<Cliente> {
        return this.listaClientes;
    }

    // Deletar dados de um determinado cliente
    public deletarCliente(cpf: string): Cliente | undefined {
        const index = this.pesquisarCliente(cpf);
        if (index !== -1) {
            const clienteRemovido = this.listaClientes.splice(index, 1)[0];
            console.log("Cliente deletado com sucesso!");
            return clienteRemovido;
        } else {
            console.log("Cliente não encontrado.");
            return undefined;
        }
    }
  
    public getAll(): Array<Cliente> {
        return this.listaClientes;
    }

    public getCliente(index: number): Cliente | null {
        if (index >= 0 && index < this.listaClientes.length) {
          return this.listaClientes[index];
        } else {
          return null; // Retorna null se o índice estiver fora dos limites
        }
      }
}
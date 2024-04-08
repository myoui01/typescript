"use strict";
/*
Deve ter uma lista do tipo Cliente chamada listaClientes.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciarClientes = void 0;
var GerenciarClientes = /** @class */ (function () {
    function GerenciarClientes() {
        this.listaClientes = new Array();
    }
    /* Cadastrar um novo cliente */
    GerenciarClientes.prototype.cadastrarCliente = function (cliente) {
        cliente.setId(this.listaClientes.length + 1);
        this.listaClientes.push(cliente);
        console.log("Cliente cadastrado com sucesso!");
        return this.listaClientes[this.listaClientes.length - 1];
    };
    // Pesquisar cliente por cpf. Deve retornar a posição em que o cliente está armazenado no array.
    GerenciarClientes.prototype.pesquisarCliente = function (cpf) {
        for (var i = 0; i < this.listaClientes.length; i++) {
            if (this.listaClientes[i].getCpf() === cpf) {
                return i;
            }
        }
        return -1;
    };
    // Editar dados de um determinado cliente
    GerenciarClientes.prototype.editarCliente = function (cliente) {
        var index = this.pesquisarCliente(cliente.getCpf());
        if (index !== -1) {
            this.listaClientes[index] = cliente;
            console.log("Cliente editado com sucesso!");
            return cliente;
        }
        else {
            console.log("Cliente não encontrado.");
            return cliente;
        }
    };
    // Exibir lista de clientes cadastrados
    GerenciarClientes.prototype.listarClientes = function () {
        return this.listaClientes;
    };
    // Deletar dados de um determinado cliente
    GerenciarClientes.prototype.deletarCliente = function (cpf) {
        var index = this.pesquisarCliente(cpf);
        if (index !== -1) {
            var clienteRemovido = this.listaClientes.splice(index, 1)[0];
            console.log("Cliente deletado com sucesso!");
            return clienteRemovido;
        }
        else {
            console.log("Cliente não encontrado.");
            return undefined;
        }
    };
    GerenciarClientes.prototype.getAll = function () {
        return this.listaClientes;
    };
    GerenciarClientes.prototype.getCliente = function (index) {
        if (index >= 0 && index < this.listaClientes.length) {
            return this.listaClientes[index];
        }
        else {
            return null; // Retorna null se o índice estiver fora dos limites
        }
    };
    return GerenciarClientes;
}());
exports.GerenciarClientes = GerenciarClientes;

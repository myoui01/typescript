"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atendimento_1 = require("./barbearia/atendimento");
var cliente_1 = require("./barbearia/cliente");
var gerenciar_atendimentos_1 = require("./barbearia/gerenciar-atendimentos");
var gerenciar_clientes_1 = require("./barbearia/gerenciar-clientes");
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var gerenciadorClientes = new gerenciar_clientes_1.GerenciarClientes();
var gerenciadorAtendimentos = new gerenciar_atendimentos_1.GerenciarAtendimentos();
var opcao;
var _loop_1 = function () {
    console.log("Escolha uma das seguintes opções:");
    console.log('1. Cadastrar novo cliente');
    console.log('2. Cadastrar novo atendimento');
    console.log('3. Pesquisar atendimento por data');
    console.log('4. Listar atendimentos');
    console.log('5. Deletar atendimento');
    console.log('0. Sair');
    opcao = parseInt(prompt("Digite a opção desejada: "));
    switch (opcao) {
        case 1: {
            var nome = prompt("Nome do cliente: ");
            var cpf = prompt("CPF do cliente: ");
            var telefone = prompt("Telefone do cliente: ");
            var email = prompt("Email do cliente: ");
            var cliente = new cliente_1.Cliente(0, nome, cpf, telefone, email);
            gerenciadorClientes.cadastrarCliente(cliente);
            console.log("Cliente cadastrado com sucesso!");
            break;
        }
        case 2: {
            var data = prompt("Data do atendimento (dd/mm/yyyy): ");
            var servico = prompt("Serviço prestado: ");
            var valor = parseFloat(prompt("Valor do atendimento: "));
            var cpf = prompt("CPF do cliente: ");
            var clienteIndex = gerenciadorClientes.pesquisarCliente(cpf);
            if (clienteIndex !== -1) {
                var cliente_2 = gerenciadorClientes.getCliente(clienteIndex); // Obtém o cliente com base no índice
                if (cliente_2 !== null) { // Verifica se o cliente não é nulo
                    gerenciadorAtendimentos.getAll().forEach(function (atendimento) {
                        if (atendimento.getCliente() === cliente_2) {
                            console.log("Atendimento ID: ".concat(atendimento.getId(), ", Cliente: ").concat(cliente_2.getNome()));
                        }
                    });
                    var atendimento = new atendimento_1.Atendimento(0, cliente_2, data, servico, valor);
                    gerenciadorAtendimentos.cadastrarAtendimento(atendimento);
                    console.log("Atendimento cadastrado com sucesso!");
                }
                else {
                    console.log("Cliente não encontrado.");
                }
            }
            else {
                console.log("Cliente não encontrado.");
            }
            break;
        }
        case 3: {
            var dataPesquisa = prompt("Data do atendimento (dd/mm/yyyy): ");
            var atendimentos = gerenciadorAtendimentos.pesquisarAtendimento(dataPesquisa);
            if (atendimentos.length > 0) {
                console.log("Atendimentos em ".concat(dataPesquisa, ":"));
                atendimentos.forEach(function (atendimento) {
                    console.log("ID: ".concat(atendimento.getId(), ", Cliente: ").concat(atendimento.getCliente().getNome()));
                });
            }
            else {
                console.log("Nenhum atendimento encontrado para esta data.");
            }
            break;
        }
        case 4: {
            var atendimentos = gerenciadorAtendimentos.listarAtendimento();
            console.log("=== Lista de Atendimentos ===");
            atendimentos.forEach(function (atendimento) {
                console.log("ID: ".concat(atendimento.getId(), ", Data: ").concat(atendimento.getData(), ", Cliente: ").concat(atendimento.getCliente().getNome()));
            });
            break;
        }
        case 5: {
            var id = parseInt(prompt("ID do atendimento a ser deletado: "));
            gerenciadorAtendimentos.deletarAtendimento(id);
            console.log("Atendimento deletado com sucesso!");
            break;
        }
        case 0: {
            console.log("Tchau brigadu!!!");
            break;
        }
        default: {
            console.log("Opção inválida. Tente novamente.");
            break;
        }
    }
};
do {
    _loop_1();
} while (opcao !== 0);

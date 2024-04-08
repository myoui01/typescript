"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var pedido_model_1 = require("./pedidos/pedido.model");
var gerencia_pedidos_service_1 = require("./pedidos/gerencia-pedidos.service");
var prompt = (0, prompt_sync_1.default)();
var gerenciadorPedidos = new gerencia_pedidos_service_1.GerenciaPedidos();
var opcao = 0;
do {
    console.log("Escolha uma das seguintes opções");
    console.log('1. Cadastrar novo pedido');
    console.log('2. Atender próximo pedido');
    console.log('0. Sair');
    opcao = parseInt(prompt("Digite a opção desejada: "));
    switch (opcao) {
        case 1: {
            var nome = prompt("Nome do cliente: ");
            var valor = parseFloat(prompt("Valor do pedido: "));
            var data = prompt("Data do pedido (yyyy-mm-dd): ");
            var pedido = new pedido_model_1.Pedido(0, nome, valor, data);
            gerenciadorPedidos.cadastrarPedido(pedido);
            console.log("Pedido cadastrado com sucesso!");
            break;
        }
        case 2: {
            var proximoPedido = gerenciadorPedidos.atenderProximoPedido();
            if (proximoPedido) {
                console.log("Pedido atendido: ".concat(proximoPedido.getNome()));
            }
            else {
                console.log("Não há pedidos pendentes.");
            }
            break;
        }
        case 0: {
            console.log("Tchau brigadu!!!");
            break;
        }
        default: console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== 0);

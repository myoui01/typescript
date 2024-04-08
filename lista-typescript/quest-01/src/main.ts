import promptSync from 'prompt-sync';

import { Pedido } from "./pedidos/pedido.model";
import { GerenciaPedidos } from "./pedidos/gerencia-pedidos.service";

const prompt = promptSync();

const gerenciadorPedidos = new GerenciaPedidos();

let opcao: number = 0;

do {
    console.log("Escolha uma das seguintes opções");
    console.log('1. Cadastrar novo pedido');
    console.log('2. Atender próximo pedido');
    console.log('0. Sair');

    opcao = parseInt(prompt("Digite a opção desejada: "));

    switch (opcao) {
        case 1: {
            const nome = prompt("Nome do cliente: ");
            const valor = parseFloat(prompt("Valor do pedido: "));
            const data = prompt("Data do pedido (yyyy-mm-dd): ");

            const pedido = new Pedido(0, nome, valor, data);
            gerenciadorPedidos.cadastrarPedido(pedido);
            console.log("Pedido cadastrado com sucesso!");
            break;
        }
        case 2: {
            const proximoPedido = gerenciadorPedidos.atenderProximoPedido();
            if (proximoPedido) {
                console.log(`Pedido atendido: ${proximoPedido.getNome()}`);
            } else {
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

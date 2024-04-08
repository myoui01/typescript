"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// npm i --save-dev @types/prompt-sync
const carro_model_1 = require("./carros/carro.model");
const gerencia_carros_service_1 = require("./carros/gerencia-carros.service");
const prompt = (0, prompt_sync_1.default)();
const estacionamento = new gerencia_carros_service_1.GerenciaCarros();
let opcao = 0;
let nome;
let placa;
let marca;
let chassi;
let ano;
let dono;
do {
    console.log("Bem vindo ao estacionamento!");
    console.log("Escolha uma das seguintes opções");
    console.log("1-Registrar veículo");
    console.log("2-Buscar veículo");
    console.log("3-Editar dados do veículo");
    console.log("4-Relatório de veículos estacionados");
    console.log("5-Deletar veículo");
    console.log("0-Sair");
    opcao = parseInt(prompt("informe a opcao."));
    switch (opcao) {
        case 1: {
            console.log("=== Cadastro do veículo ===");
            nome = prompt("informe o nome.");
            placa = prompt("informe a placa.");
            marca = prompt("informe a marca.");
            chassi = prompt("informe o chassi.");
            ano = parseInt(prompt("informe o ano."));
            dono = parseInt(prompt("informe o dono."));
            let veiculo = new carro_model_1.Carro(0, placa, chassi, nome, marca, ano, dono);
            const resultado = estacionamento.add(veiculo);
            console.log(resultado);
            break;
        }
        case 2: {
            console.log("=== Buscar veículo ===");
            placa = prompt("informe a placa.");
            const resultado = estacionamento.get(placa);
            console.log(resultado);
            break;
        }
        case 3: {
            console.log("=== Edição do veículo ===");
            nome = prompt("informe o nome.");
            placa = prompt("informe a placa.");
            marca = prompt("informe a marca.");
            chassi = prompt("informe o chassi.");
            ano = parseInt(prompt("informe o ano."));
            dono = parseInt(prompt("informe o dono."));
            let veiculo = new carro_model_1.Carro(0, placa, chassi, nome, marca, ano, dono);
            const resultado = estacionamento.update(veiculo);
            console.log(resultado);
            break;
        }
        case 4: {
            console.log("=== Veículos estacionados ===");
            const lista = estacionamento.getAll();
            for (const carro of lista) {
                console.log(carro);
            }
            break;
        }
        case 5: {
            console.log("Exclusão do veículo");
            placa = prompt("informe a placa.");
            estacionamento.delete(placa);
            break;
        }
        default: console.log("Tchau brigadu!!!");
    }
} while (opcao > 0);

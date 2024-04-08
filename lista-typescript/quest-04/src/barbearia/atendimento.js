"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atendimento = void 0;
var Atendimento = /** @class */ (function () {
    function Atendimento(id, cliente, data, servico, valor) {
        this.id = id;
        this.cliente = cliente;
        this.data = data;
        this.servico = servico;
        this.valor = valor;
    }
    // Getters e setters
    Atendimento.prototype.getId = function () {
        return this.id;
    };
    Atendimento.prototype.setId = function (id) {
        this.id = id;
    };
    Atendimento.prototype.getCliente = function () {
        return this.cliente;
    };
    Atendimento.prototype.setCliente = function (cliente) {
        this.cliente = cliente;
    };
    Atendimento.prototype.getData = function () {
        return this.data;
    };
    Atendimento.prototype.setData = function (data) {
        this.data = data;
    };
    Atendimento.prototype.getServico = function () {
        return this.servico;
    };
    Atendimento.prototype.setServico = function (servico) {
        this.servico = servico;
    };
    Atendimento.prototype.getValor = function () {
        return this.valor;
    };
    Atendimento.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    return Atendimento;
}());
exports.Atendimento = Atendimento;

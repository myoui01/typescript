"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(id, nome, valor, data) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.data = data;
    }
    Pedido.prototype.getId = function () {
        return this.id;
    };
    Pedido.prototype.setId = function (id) {
        this.id = id;
    };
    Pedido.prototype.getNome = function () {
        return this.nome;
    };
    Pedido.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pedido.prototype.getValor = function () {
        return this.valor;
    };
    Pedido.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    Pedido.prototype.getData = function () {
        return this.data;
    };
    Pedido.prototype.setData = function (data) {
        this.data = data;
    };
    Pedido.prototype.toString = function () {
        return "id: ".concat(this.id, ", nome: ").concat(this.nome, ", valor: ").concat(this.valor, ", data: ").concat(this.data);
    };
    Pedido.prototype.setPedido = function (pedido) {
        this.id = pedido.id;
        this.nome = pedido.nome;
        this.valor = pedido.valor;
        this.data = pedido.data;
    };
    return Pedido;
}());
exports.Pedido = Pedido;

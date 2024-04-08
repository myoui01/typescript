"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciaPedidos = void 0;
var GerenciaPedidos = /** @class */ (function () {
    function GerenciaPedidos() {
        this.listaPedidos = new Array();
    }
    GerenciaPedidos.prototype.cadastrarPedido = function (pedido) {
        pedido.setId(this.listaPedidos.length + 1);
        this.listaPedidos.push(pedido);
        console.log("Pedido cadastrado com sucesso!");
        return this.listaPedidos[this.listaPedidos.length - 1];
    };
    GerenciaPedidos.prototype.deletarPedido = function (id) {
        var index = this.listaPedidos.findIndex(function (pedido) { return pedido.getId() === id; });
        if (index !== -1) {
            this.listaPedidos.splice(index, 1);
            console.log("Pedido com ID ".concat(id, " foi deletado com sucesso!"));
        }
        else {
            console.log("Pedido com ID ".concat(id, " n\u00E3o encontrado."));
        }
    };
    GerenciaPedidos.prototype.atenderProximoPedido = function () {
        if (this.listaPedidos.length === 0) {
            console.log("Não há pedidos pendentes.");
            return null;
        }
        var proximoPedido = this.listaPedidos.shift();
        console.log("Pedido atendido: ".concat(proximoPedido === null || proximoPedido === void 0 ? void 0 : proximoPedido.getNome()));
        return proximoPedido || null;
    };
    GerenciaPedidos.prototype.getAll = function () {
        return this.listaPedidos;
    };
    return GerenciaPedidos;
}());
exports.GerenciaPedidos = GerenciaPedidos;

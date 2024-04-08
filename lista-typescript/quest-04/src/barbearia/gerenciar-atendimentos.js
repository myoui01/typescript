"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciarAtendimentos = void 0;
var GerenciarAtendimentos = /** @class */ (function () {
    function GerenciarAtendimentos() {
        this.listaAtendimentos = [];
        this.proximoId = 1;
    }
    GerenciarAtendimentos.prototype.cadastrarAtendimento = function (atendimento) {
        atendimento.setId(this.proximoId++);
        this.listaAtendimentos.push(atendimento);
        console.log("Atendimento cadastrado com sucesso!");
        return atendimento;
    };
    GerenciarAtendimentos.prototype.pesquisarAtendimento = function (data) {
        return this.listaAtendimentos.filter(function (atendimento) { return atendimento.getData() === data; });
    };
    GerenciarAtendimentos.prototype.listarAtendimento = function () {
        return this.listaAtendimentos;
    };
    GerenciarAtendimentos.prototype.deletarAtendimento = function (id) {
        var index = this.listaAtendimentos.findIndex(function (atendimento) { return atendimento.getId() === id; });
        if (index !== -1) {
            this.listaAtendimentos.splice(index, 1);
            console.log("Atendimento deletado com sucesso!");
        }
        else {
            console.log("Atendimento não encontrado.");
        }
    };
    GerenciarAtendimentos.prototype.getAll = function () {
        return this.listaAtendimentos;
    };
    return GerenciarAtendimentos;
}());
exports.GerenciarAtendimentos = GerenciarAtendimentos;

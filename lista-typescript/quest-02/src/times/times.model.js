"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Times = void 0;
var Times = /** @class */ (function () {
    function Times(nome, pontos) {
        this.nome = nome;
        this.pontos = pontos;
    }
    Times.prototype.getNome = function () {
        return this.nome;
    };
    Times.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Times.prototype.getPontos = function () {
        return this.pontos;
    };
    Times.prototype.setPontos = function (pontos) {
        this.pontos = pontos;
    };
    Times.prototype.toString = function () {
        return "nome: ".concat(this.nome, ", pontos: ").concat(this.pontos);
    };
    Times.prototype.setTimes = function (times) {
        this.nome = times.nome;
        this.pontos = times.pontos;
    };
    return Times;
}());
exports.Times = Times;

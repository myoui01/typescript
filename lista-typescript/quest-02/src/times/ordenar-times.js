"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenarTimes = void 0;
var times_model_1 = require("./times.model");
var timesCampeonatoBrasileiro = [
    new times_model_1.Times('Flamengo', 32),
    new times_model_1.Times('Palmeiras', 28),
    new times_model_1.Times('Atlético Mineiro', 30),
    new times_model_1.Times('Fortaleza', 25),
    new times_model_1.Times('Bragantino', 27),
    new times_model_1.Times('Corinthians', 22),
    new times_model_1.Times('Fluminense', 26),
    new times_model_1.Times('Santos', 21)
];
var OrdenarTimes = /** @class */ (function () {
    function OrdenarTimes() {
        this.listaTimes = new Array();
    }
    OrdenarTimes.prototype.ordenarTimes = function (times) {
        this.listaTimes = times.slice();
        this.listaTimes.sort(function (a, b) { return b.getPontos() - a.getPontos(); });
    };
    OrdenarTimes.prototype.getAll = function () {
        return this.listaTimes;
    };
    return OrdenarTimes;
}());
exports.OrdenarTimes = OrdenarTimes;

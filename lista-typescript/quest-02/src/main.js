"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var times_model_1 = require("./times/times.model");
var ordenar_times_1 = require("./times/ordenar-times");
var ordenador = new ordenar_times_1.OrdenarTimes();
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
ordenador.ordenarTimes(timesCampeonatoBrasileiro);
var timesOrdenados = ordenador.getAll();
console.log(timesOrdenados);

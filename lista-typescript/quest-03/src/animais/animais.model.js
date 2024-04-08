"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(id, nome, especie, peso, idade, raca) {
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.peso = peso;
        this.idade = idade;
        this.raca = raca;
    }
    Animal.prototype.getId = function () {
        return this.id;
    };
    Animal.prototype.setId = function (id) {
        this.id = id;
    };
    Animal.prototype.getNome = function () {
        return this.nome;
    };
    Animal.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Animal.prototype.getEspecie = function () {
        return this.especie;
    };
    Animal.prototype.setEspecie = function (especie) {
        this.especie = especie;
    };
    Animal.prototype.getPeso = function () {
        return this.peso;
    };
    Animal.prototype.setPeso = function (peso) {
        this.peso = peso;
    };
    Animal.prototype.getIdade = function () {
        return this.idade;
    };
    Animal.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Animal.prototype.getRaca = function () {
        return this.raca;
    };
    Animal.prototype.setRaca = function (raca) {
        this.raca = raca;
    };
    Animal.prototype.toString = function () {
        return "id: ".concat(this.id, ", nome: ").concat(this.nome, ", especie: ").concat(this.especie, ", peso: ").concat(this.peso, ", idade: ").concat(this.idade, ", raca: ").concat(this.raca);
    };
    Animal.prototype.setAnimais = function (animais) {
        this.id = animais.id;
        this.nome = animais.nome;
        this.especie = animais.especie;
        this.peso = animais.peso;
        this.idade = animais.idade;
        this.raca = animais.raca;
    };
    return Animal;
}());
exports.Animal = Animal;

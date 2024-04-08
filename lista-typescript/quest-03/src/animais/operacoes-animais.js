"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperacoesAnimais = void 0;
var animais_model_1 = require("./animais.model");
var animais = [
    new animais_model_1.Animal(1, 'Buddy', 'Cachorro', 12, 3, 'Labrador'),
    new animais_model_1.Animal(2, 'Mia', 'Gato', 5, 2, 'Siames'),
    new animais_model_1.Animal(3, 'Charlie', 'Cachorro', 8, 5, 'Beagle'),
    new animais_model_1.Animal(4, 'Luna', 'Gato', 4.5, 1, 'Persa'),
    new animais_model_1.Animal(5, 'Rocky', 'Cachorro', 15, 7, 'Bulldog'),
    new animais_model_1.Animal(6, 'Max', 'Cachorro', 10, 4, 'Golden Retriever'),
    new animais_model_1.Animal(7, 'Milo', 'Gato', 4, 3, 'Maine Coon'),
    new animais_model_1.Animal(8, 'Lucy', 'Cachorro', 9, 2, 'Poodle'),
    new animais_model_1.Animal(9, 'Chloe', 'Gato', 3.5, 1, 'Bengal'),
    new animais_model_1.Animal(10, 'Bailey', 'Cachorro', 11, 6, 'Dachshund'),
    new animais_model_1.Animal(11, 'Oliver', 'Gato', 5.5, 2, 'Ragdoll'),
    new animais_model_1.Animal(12, 'Zoe', 'Cachorro', 7.5, 3, 'Chihuahua'),
    new animais_model_1.Animal(13, 'Leo', 'Gato', 4.2, 1, 'Sphynx'),
    new animais_model_1.Animal(14, 'Daisy', 'Cachorro', 6.8, 4, 'Yorkshire Terrier'),
    new animais_model_1.Animal(15, 'Lily', 'Gato', 3.8, 2, 'British Shorthair'),
];
var OperacoesAnimais = /** @class */ (function () {
    function OperacoesAnimais(animais) {
        this.listaAnimais = animais;
    }
    /*
    a. Crie um novo array em que cada objeto contém apenas os atributos espécie, idade e raça (use o método map).*/
    OperacoesAnimais.prototype.getDadosAnimal = function () {
        return this.listaAnimais.map(function (animal) {
            return {
                especie: animal.getEspecie(),
                idade: animal.getIdade(),
                raca: animal.getRaca(),
            };
        });
    };
    // b. Crie um novo array em que cada objeto contém apenas os animais cuja espécie é Cachorro (use o método filter).
    OperacoesAnimais.prototype.getCachorros = function () {
        return this.listaAnimais.filter(function (animal) { return animal.getEspecie() === 'Cachorro'; });
    };
    // c. Calcule e retorne o peso total de todos os animais, por meio do método reduce.
    OperacoesAnimais.prototype.calcularPesoTotal = function () {
        return this.listaAnimais.reduce(function (total, animal) { return total + animal.getPeso(); }, 0);
    };
    // d. Utilize o método find para encontrar o primeiro animal cuja raça é Labrador.
    OperacoesAnimais.prototype.encontrarLabrador = function () {
        return this.listaAnimais.find(function (animal) { return animal.getRaca() === 'Labrador'; });
    };
    // e. Utilize o método findIndex para encontrar a posição no array em que está o animal cujo nome é Lucy.
    OperacoesAnimais.prototype.encontrarIndiceLucy = function () {
        return this.listaAnimais.findIndex(function (animal) { return animal.getNome() === 'Lucy'; });
    };
    OperacoesAnimais.prototype.getAll = function () {
        return this.listaAnimais;
    };
    return OperacoesAnimais;
}());
exports.OperacoesAnimais = OperacoesAnimais;

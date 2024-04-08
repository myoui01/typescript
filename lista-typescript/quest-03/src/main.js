"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animais_model_1 = require("./animais/animais.model");
var operacoes_animais_1 = require("./animais/operacoes-animais");
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
var operacoes = new operacoes_animais_1.OperacoesAnimais(animais);
console.log(operacoes.getDadosAnimal()); // Retorna os dados dos animais
console.log(operacoes.getCachorros()); // Retorna os animais da espécie "Cachorro"
console.log(operacoes.calcularPesoTotal()); // Retorna o peso total dos animais
console.log(operacoes.encontrarLabrador()); // Retorna o primeiro animal da raça "Labrador"
console.log(operacoes.encontrarIndiceLucy()); // Retorna o índice do animal com o nome "Lucy"

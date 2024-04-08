"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, cpf, telefone, email) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
    }
    // Getters e setters
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.setId = function (id) {
        this.id = id;
    };
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Cliente.prototype.getCpf = function () {
        return this.cpf;
    };
    Cliente.prototype.setCpf = function (cpf) {
        this.cpf = cpf;
    };
    Cliente.prototype.getTelefone = function () {
        return this.telefone;
    };
    Cliente.prototype.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
    Cliente.prototype.getEmail = function () {
        return this.email;
    };
    Cliente.prototype.setEmail = function (email) {
        this.email = email;
    };
    return Cliente;
}());
exports.Cliente = Cliente;

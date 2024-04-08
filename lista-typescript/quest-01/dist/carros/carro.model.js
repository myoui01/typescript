"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(id, placa, chassi, nome, marca, ano, dono) {
        this.id = id || 0;
        this.placa = placa || "";
        this.chassi = chassi || "";
        this.nome = nome || "";
        this.marca = marca || "";
        this.ano = ano || 0;
        this.dono = dono || 0;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getPlaca() {
        return this.placa;
    }
    setPlaca(placa) {
        this.placa = placa;
    }
    getChassi() {
        return this.chassi;
    }
    setChassi(chassi) {
        this.chassi = chassi;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    getDono() {
        return this.dono;
    }
    setDono(dono) {
        this.dono = dono;
    }
    toString() {
        return "id: " + this.id + ", nome: " + this.nome + ", placa: " + this.placa +
            ", chassi: " + this.chassi + ", marca: " + this.marca
            + ", ano: " + this.ano + ", dono: " + this.dono;
    }
    setCarro(veiculo) {
        Object.assign(this, veiculo);
    }
}
exports.Carro = Carro;

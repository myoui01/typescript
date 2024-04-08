"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciaCarros = void 0;
class GerenciaCarros {
    constructor() {
        this.listaCarros = new Array();
    }
    add(veiculo) {
        veiculo.setId(this.listaCarros.length + 1);
        this.listaCarros.push(veiculo);
        return this.listaCarros[this.listaCarros.length - 1];
    }
    search(placa) {
        return this.listaCarros.findIndex(function (veiculo) {
            return veiculo.getPlaca() === placa;
        });
    }
    update(veiculo) {
        const index = this.search(veiculo.getPlaca());
        if (index > -1) {
            // this.listaCarros[index].nome = veiculo.nome;
            // this.listaCarros[index].ano = veiculo.ano;
            // this.listaCarros[index].dono = veiculo.dono;
            // this.listaCarros[index].marca = veiculo.marca;
            // this.listaCarros[index] = { ...veiculo};
            veiculo.setId(this.listaCarros[index].getId());
            this.listaCarros[index].setCarro(veiculo);
            return this.listaCarros[index];
        }
        else {
            console.log("Não existe veículo com a placa: "
                + veiculo.getPlaca());
        }
    }
    delete(placa) {
        const index = this.search(placa);
        if (index > -1)
            this.listaCarros.splice(index, 1);
    }
    getAll() {
        return this.listaCarros;
    }
    get(placa) {
        const index = this.search(placa);
        return this.listaCarros[index];
    }
}
exports.GerenciaCarros = GerenciaCarros;

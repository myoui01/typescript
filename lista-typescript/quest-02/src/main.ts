import { Times } from "./times/times.model";
import { OrdenarTimes } from "./times/ordenar-times"; 

const ordenador = new OrdenarTimes();

const timesCampeonatoBrasileiro: Array<Times> = [
    new Times('Flamengo', 32),
    new Times('Palmeiras', 28),
    new Times('Atlético Mineiro', 30),
    new Times('Fortaleza', 25),
    new Times('Bragantino', 27),
    new Times('Corinthians', 22),
    new Times('Fluminense', 26),
    new Times('Santos', 21),
    new Times('Cruzeiro', 0)
];

ordenador.ordenarTimes(timesCampeonatoBrasileiro);
const timesOrdenados = ordenador.getAll();
console.log(timesOrdenados);

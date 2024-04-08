import { Animal } from "./animais/animais.model";
import { OperacoesAnimais } from "./animais/operacoes-animais";

const animais: Array<Animal> = [
    new Animal(1, 'Buddy', 'Cachorro', 12, 3, 'Labrador'),
    new Animal(2, 'Mia', 'Gato', 5, 2, 'Siames'),
    new Animal(3, 'Charlie', 'Cachorro', 8, 5, 'Beagle'),
    new Animal(4, 'Luna', 'Gato', 4.5, 1, 'Persa'),
    new Animal(5, 'Rocky', 'Cachorro', 15, 7, 'Bulldog'),
    new Animal(6, 'Max', 'Cachorro', 10, 4, 'Golden Retriever'),
    new Animal(7, 'Milo', 'Gato', 4, 3, 'Maine Coon'),
    new Animal(8, 'Lucy', 'Cachorro', 9, 2, 'Poodle'),
    new Animal(9, 'Chloe', 'Gato', 3.5, 1, 'Bengal'),
    new Animal(10, 'Bailey', 'Cachorro', 11, 6, 'Dachshund'),
    new Animal(11, 'Oliver', 'Gato', 5.5, 2, 'Ragdoll'),
    new Animal(12, 'Zoe', 'Cachorro', 7.5, 3, 'Chihuahua'),
    new Animal(13, 'Leo', 'Gato', 4.2, 1, 'Sphynx'),
    new Animal(14, 'Daisy', 'Cachorro', 6.8, 4, 'Yorkshire Terrier'),
    new Animal(15, 'Lily', 'Gato', 3.8, 2, 'British Shorthair'),
];

const operacoes = new OperacoesAnimais(animais);

console.log(operacoes.getDadosAnimal()); // Retorna os dados dos animais
console.log(operacoes.getCachorros()); // Retorna os animais da espécie "Cachorro"
console.log(operacoes.calcularPesoTotal()); // Retorna o peso total dos animais
console.log(operacoes.encontrarLabrador()); // Retorna o primeiro animal da raça "Labrador"
console.log(operacoes.encontrarIndiceLucy()); // Retorna o índice do animal com o nome "Lucy"

import { Animal } from "./animais.model";

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

export class OperacoesAnimais {
    private listaAnimais: Array<Animal>;

    constructor(animais: Array<Animal>) {
        this.listaAnimais = animais;
      }   
    
    /*
    a. Crie um novo array em que cada objeto contém apenas os atributos espécie, idade e raça (use o método map).*/

    public getDadosAnimal(): Array<{ especie: string, idade: number, raca: string }> { 
        return this.listaAnimais.map(animal => {
            return {
                especie: animal.getEspecie(),
                idade: animal.getIdade(),
                raca: animal.getRaca(),
            };
        });
    }

    // b. Crie um novo array em que cada objeto contém apenas os animais cuja espécie é Cachorro (use o método filter).
    public getCachorros(): Array<Animal> {
        return this.listaAnimais.filter(animal => animal.getEspecie() === 'Cachorro');
    }

    // c. Calcule e retorne o peso total de todos os animais, por meio do método reduce.
    public calcularPesoTotal(): number {
        return this.listaAnimais.reduce((total, animal) => total + animal.getPeso(), 0);
    }

    // d. Utilize o método find para encontrar o primeiro animal cuja raça é Labrador.
    public encontrarLabrador(): Animal | undefined {
        return this.listaAnimais.find(animal => animal.getRaca() === 'Labrador');
    }

    // e. Utilize o método findIndex para encontrar a posição no array em que está o animal cujo nome é Lucy.
    public encontrarIndiceLucy(): number {
        return this.listaAnimais.findIndex(animal => animal.getNome() === 'Lucy');
    }
    
    public getAll(): Array<Animal> {
        return this.listaAnimais;
    }
}

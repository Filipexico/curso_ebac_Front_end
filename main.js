// Classe abstrata Veiculo
class Veiculo {
  constructor(marca, modelo) {
    if (this.constructor === Veiculo) {
      throw new Error("Classe abstrata 'Veiculo' não pode ser instanciada diretamente.");
    }
    this.marca = marca;
    this.modelo = modelo;
  }

  acelerar() {
    console.log(`${this.marca} ${this.modelo} está acelerando.`);
  }
}

// Classe Carro herdando de Veiculo
class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    super(marca, modelo);
    this.portas = portas;
  }

  buzinar() {
    console.log(`${this.marca} ${this.modelo} está buzinando! Beep Beep!`);
  }
}

// Classe Moto herdando de Veiculo
class Moto extends Veiculo {
  constructor(marca, modelo, cilindradas) {
    super(marca, modelo);
    this.cilindradas = cilindradas;
  }

  empinar() {
    console.log(`${this.marca} ${this.modelo} com ${this.cilindradas} cilindradas está empinando!`);
  }
}

// Criando instâncias
const carro1 = new Carro("Toyota", "Corolla", 4);
const carro2 = new Carro("Honda", "Civic", 4);
const moto1 = new Moto("Yamaha", "MT-07", 689);

// Usando os métodos
carro1.acelerar();
carro1.buzinar();

carro2.acelerar();
carro2.buzinar();

moto1.acelerar();
moto1.empinar();

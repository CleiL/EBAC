class FormaGeometrica {
    constructor() {
        if (new.target === FormaGeometrica) {
        throw new TypeError(" Não é possível construir instâncias abstratas diretamente");
        }
    }

    calcularArea() {
        throw new Error("O método 'calcularArea()' deve ser implementado.");
    }

    calcularPerimetro() {
        throw new Error("O método 'calcularPerimetro()' deve ser implementado.");
    }
}

    class Retangulo extends FormaGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
      return this.base * this.altura;
    }
    
    calcularPerimetro() {
      return 2 * (this.base + this.altura);
    }
}

    class Circulo extends FormaGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
      return Math.PI * Math.pow(this.raio, 2);
    }

    calcularPerimetro() {
      return 2 * Math.PI * this.raio;
    }
}

const retangulo1 = new Retangulo(5, 3);
const circulo1 = new Circulo(4);
const retangulo2 = new Retangulo(10, 2);
const circulo2 = new Circulo(3);
const retangulo3 = new Retangulo(7, 4);

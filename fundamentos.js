//AFTER CLASS - OBJETOS

//QUE SON? ENTENDIENDO LA IMPORTANCIA DE LOS OBJETOS
///1)Estructura de datos
///Mostrar todo lo que pueden contener(Data types) otros objetos, funciones

///2)Base fundamental de la gran mayoria de procesos de desarrollo
/////Mostrar objeto window
/////declarar una function y mostrar que pueden crearse keys dentro, en definitiva es un objeto(no recomendable)
/////https://reactjs.org/docs/introducing-jsx.html

///3)Base fundamental en la transferencia de información en la web
///////https://developers.themoviedb.org/3/movies/get-movie-details
//////https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artist

//COMO CONSUMIRLOS (DOT/BRACKET Notation´s)
///cuando usar c/u?
const auto = {
    marca: "Ford",
    modelo: "Fiesta",
    motor: 1.6,
    rodadoEn: 2019,
    kilometros: 12500,
    precioMercado: 3400000,
  };
  
  let consultaSobreAuto = prompt("¿Que dato le gustaria saber del auto?");
  if (auto[consultaSobreAuto]) {
    alert(`Respuesta a su consulta:${auto[consultaSobreAuto]}`);
  } else {
    alert(`Disculpe, no contamos con ese dato (${consultaSobreAuto})`);
  }
  
  //COMO MODIFICARLOS (DOT/BRACKET Notation´s)
  ///agregar nuevas keys
  ///modificar keys
  (auto.origen = "Argentina"), (auto["color"] = "rojo");
  auto.marca = "Chivo";
  
  //METODOS Y THIS
  //metodos:
  /// SON bloques de codigo (instrucciones) que pueden reutilizarse desde un objeto. Generalmente son utilizados para afectar la condicion propia de este. Aunque, pueden tomar otras funciones en orden a nuestro code flow. Siempre se corresponden con una key del objeto (expresion)
  
  ///Formas correctas
  ////expresiones
  const auto = {
    marca: "Ford",
    modelo: "Fiesta",
    motor: 1.6,
    rodadoEn: 2019,
    kilometros: 12500,
    precioMercado: 3400000,
    generarTituloPublicacion: function (marca, modelo, motor, rodadoEn) {
      return `${marca} ${modelo} ${motor} ${rodadoEn}`.toUpperCase();
    },
  };
  ////arrowS
  const auto = {
    marca: "Ford",
    modelo: "Fiesta",
    motor: 1.6,
    rodadoEn: 2019,
    kilometros: 12500,
    precioMercado: 3400000,
    generarTituloPublicacion:(marca, modelo, motor, rodadoEn)=> {
      return `${marca} ${modelo} ${motor} ${rodadoEn}`.toUpperCase();
    },
  };
  
  
  ///Formas incorrectas (no admiten function declarations adentro)
  const auto = {
    marca: "Ford",
    modelo: "Fiesta",
    motor: 1.6,
    rodadoEn: 2019,
    kilometros: 12500,
    precioMercado: 3400000,
    function generarTituloPublicacion(marca, modelo, motor, rodadoEn) {
      return `${marca} ${modelo} ${motor} ${rodadoEn}`;
    },
  };
  
  //this que es y usandolo en un objeto permite ahorrar repetir argumentos
  ///THIS es una variable aleatoria que apunta al objeto que la contiene al momento de su ejecucion por parte del interprete. (Mostrar ejemplo window)
  const auto = {
    marca: "Ford",
    modelo: "Fiesta",
    motor: 1.6,
    rodadoEn: 2019,
    kilometros: 12500,
    precioMercado: 3400000,
    litrosEnTanque: 40,
    generarTituloPublicacion:()=> {
      return `${this.marca} ${this.modelo} ${this.motor} ${this.rodadoEn}`.toUpperCase();
    },
    rodarUrbano: function () {
      this.kilometros += 100;
      this.litrosEnTanque -= 8;
      return `Estado actualizado:
       - km actuales: ${this.kilometros}
       - litros en tanque: ${this.litrosEnTanque}`;
    }, //8litros/100mk
  };
  
  ///Y PORQUE NO HAGO OBJETO.KEY EN VES DE THIS.KEY?
  ////por cuestiones de escalabilidad, DRY y no hardcodear los procesos(forsarlo)
  const auto = {
    marca: "Ford",
    modelo: "Fiesta",
    motor: 1.6,
    rodadoEn: 2019,
    kilometros: 12500,
    precioMercado: 3400000,
    litrosEnTanque: 40,
    generarTituloPublicacion:()=> {
      return `${auto.marca} ${auto.modelo} ${auto.motor} ${auto.rodadoEn}`.toUpperCase();
    },
    rodarUrbano: function () {
      auto.kilometros += 100;
      auto.litrosEnTanque -= 8;
      return `Estado actualizado:
       - km actuales: ${auto.kilometros}
       - litros en tanque: ${auto.litrosEnTanque}`;
    }, //8litros/100mk
  };
  
  //OPERADOR IN Y BUCLE FOR-IN
  
  //CLASES
  ///Permiten generar objetos de forma programatica a partir de un MODELO o molde llamado CLASE
  //Estas clases se llaman con su primera letra en mayuscula por convencion
  //1) constructor function
  const Persona = function(nombre, nacimiento){
    this.nombre=nombre,
    this.nacimiento=nacimiento
    //NUNCA HACER ESTO, por este tema evitar constructores con funciones. Hacen a la aplicacion mas ineficiente.Usar clases
    this.calcularEdad = function(){
      return 2022-this.nacimiento
    }
  }
  //QUE HACE NEW?
  //a) crea un objeto {}
  //b) se llama al constructor (function) y se coloca toda la info
  const ivan = new Persona('Ivan', 1991)
  console.log(ivan instanceof Persona)
  
  
  //Class expressions
  const PersonaExpression = class{
    constructor(nombre, nacimiento){
        this.nombre = nombre;
        this.nacimiento = nacimiento;
    }
    //todo lo que esta fuera del bloque constructor, no se repite(ineficiencia en memoria)
    calcularEdad(){
      return 2022-this.nacimiento
    }
  }
  
  const ivan = new PersonaExpression('Ivan', 1991)
  //Class declarations
  class PersonaDeclaration{
    constructor(nombre, nacimiento){
      this.nombre = nombre;
      this.nacimiento = nacimiento;
    }
    //todo lo que esta fuera del bloque constructor, no se repite(ineficiencia en memoria)
    calcularEdad(){
      return 2022-this.nacimiento
    }
  }
  
  const ivan = new PersonaExpression('Ivan', 1991)
  
  
  
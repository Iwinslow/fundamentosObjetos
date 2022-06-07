//EJERCICIO INTEGRADOR incluyendo (CONDICIONALES, BUCLES, FUNCIONES Y OBJETOS)
///Agencia venta automotores
const agencia = {
  razonSocial: "La rueda coder SRL",
  cuit: "30-99999999-9",
  domicilio: "Calle Falsa 123",
  cajaDolares: 50000,
  resultadoOperaciones: 0,
  vender: (precioVenta) => {
    agencia.cajaDolares += precioVenta;
    agencia.resultadoOperaciones += precioVenta;
    return `Saldo en caja: U$D ${agencia.cajaDolares}; Resultado acumulado: U$D ${agencia.resultadoOperaciones}`;
  },
  comprar: (precioCompraDolares) => {
    agencia.cajaDolares -= precioCompraDolares;
    agencia.resultadoOperaciones -= precioCompraDolares;
    return `Saldo en caja: U$D ${agencia.cajaDolares}; Resultado acumulado: U$D ${agencia.resultadoOperaciones}`;
  },
};
//Clase para generar Nuevos vehiculos en stock
class VehiculoStock {
  constructor(marca, modelo, motor, rodadoEn, kilometros, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.motor = motor;
    this.rodadoEn = rodadoEn;
    this.kilometros = kilometros;
    this.precio = precio;
  }
  generarTituloPublicacion() {
    return `${this.marca} ${this.modelo} ${this.motor} ${this.rodadoEn} con ${this.kilometros}km`.toUpperCase();
  }
}

let operando = true;

alert(`Bienvenido empleado de ${agencia.razonSocial}`);
while (operando) {
  let codigoOperacion = Number(
    prompt(`
      OPERACIONES DISPONIBLES:
      1) CONSULTAR SALDO CAJA DOLARES;
      2) CONSULTAR RESULTADOS ACUMULADOS;
      3) COMPRAR RODADO;
      4) VENDER RODADO;
      5) CONSULTAR STOCK
  
      PARA SALIR PRESIONE ENTER O INGRESE "0"
      `)
  );

  switch (codigoOperacion) {
    case 0:
      alert(`Su sesion ha finalizado`);
      operando = false;
      break;
    case 1:
      alert(`Saldo disponible U$D ${agencia.cajaDolares}`);
      break;
    case 2:
      alert(`Resultado acumulado U$D ${agencia.resultadoOperaciones}`);
      break;
    case 3: {
      ///INGRESA DATOS DE COMPRA
      alert("Ingrese los datos del rodado a COMPRAR a continuación:");
      let marca = prompt("Ingrese MARCA").toLocaleLowerCase();
      if (typeof marca !== "string" || marca === "") {
        marca = prompt("Ingrese MARCA CORRECTAMENTE".toLocaleLowerCase());
      }
      let modelo = prompt("Ingrese MODELO").toLocaleLowerCase();
      if (typeof modelo !== "string" || modelo === "") {
        modelo = prompt("Ingrese MODELO CORRECTAMENTE").toLocaleLowerCase();
      }
      let motor = Number(prompt("Ingrese MOTOR"));
      if (typeof motor !== "number" || motor === 0) {
        motor = prompt("Ingrese MOTOR CORRECTAMENTE");
      }
      let rodadoEn = Number(prompt("Ingrese AÑO"));
      if (typeof rodadoEn !== "number" || rodadoEn === 0) {
        rodadoEn = prompt("Ingrese AÑO CORRECTAMENTE");
      }
      let kilometros = Number(prompt("Ingrese KILOMETROS"));
      if (typeof kilometros !== "number" || kilometros === 0) {
        kilometros = prompt("Ingrese KILOMETROS CORRECTAMENTE");
      }
      let precio = Number(prompt("Ingrese PRECIO COMPRA"));
      if (typeof precio !== "number" || precio === 0) {
        precio = prompt("Ingrese PRECIO COMPRA CORRECTAMENTE");
      }
      ///CREA NUEVO VEHICULO (INSTANCIA)
      let nuevoVehiculo = new VehiculoStock(
        marca,
        modelo,
        motor,
        rodadoEn,
        kilometros,
        precio
      );
      ///AGREGA NUEVO VEHICULO A AGENCIA
      agencia[`${marca}-${modelo}-${rodadoEn}`] = nuevoVehiculo;
      ///OUTPUT PARA EL USUARIO
      alert(
        `Se ha ingresado al stock de la agendia al rodado ${marca}-${modelo}-${rodadoEn}`
      );
      alert(agencia.comprar(nuevoVehiculo.precio));
      break;
    }
    case 4: {
      ///INGRESA DATOS DE VENTA
      alert("Ingrese los datos del rodado a VENDER a continuación:");
      let marca = prompt("Ingrese MARCA").toLocaleLowerCase();
      if (typeof marca !== "string" || marca === "") {
        marca = prompt("Ingrese MARCA CORRECTAMENTE".toLocaleLowerCase());
      }
      let modelo = prompt("Ingrese MODELO").toLocaleLowerCase();
      if (typeof modelo !== "string" || modelo === 0) {
        modelo = prompt("Ingrese MODELO CORRECTAMENTE").toLocaleLowerCase();
      }
      let rodadoEn = Number(prompt("Ingrese AÑO"));
      if (typeof rodadoEn !== "number" || rodadoEn === 0) {
        rodadoEn = prompt("Ingrese AÑO CORRECTAMENTE");
      }
      let precioVenta = Number(
        prompt("Ingrese Precio venta").toLocaleLowerCase()
      );
      if (typeof precioVenta !== "number" || precioVenta === 0) {
        precioVenta = Number(
          prompt("Ingrese Precio venta CORRECTAMENTE".toLocaleLowerCase())
        );
      }
      ///CONTROLA SI EXISTE VEHICULO EN STOCK
      if (agencia[`${marca}-${modelo}-${rodadoEn}`]) {
        ///SI EXISTE, SOLICITA CONFIRMAR VENTA
        if (
          confirm(
            `¿Confirma la venta del vehiculo ${marca}-${modelo}-${rodadoEn} por U$D ${precioVenta}?`
          )
        ) {
          ///EL USUARIO CONFIRMA EL PROCESO
          delete agencia[`${marca}-${modelo}-${rodadoEn}`];
          alert(
            `¡Felicitaciones por su venta del vehiculo ${marca}-${modelo}-${rodadoEn} !`
          );
          alert(agencia.vender(precioVenta));
          console.log(agencia);
          break;
        } else {
          ///EL USUARIO CANCELO EL PROCESO
          alert("Se ha cancelado la venta");
          break;
        }
        ///SI NO EXISTE, SE CANCELA EL PROCESO
      } else {
        alert(`El vehiculo ingresado no se encuentra en stock`);
        break;
      }
    }
    case 5: {
      ///CREA UN STRING QUE DETALLARA STOCK
      let stock = "";
      ///BUCLE DENTRO DEL OBJETO BUSCANDO KEYs QUE REPRESENTAN VEHICULOS EN STOCK
      for (let key in agencia) {
        if (key.includes("-")) {
          stock += `${key} comprado en ${agencia[key].precio}
               `;
        }
      }
      if (stock.length === 0) {
        alert("No existen vehiculos en stock");
        break;
      } else {
        alert(stock);
        break;
      }
    }
    default:
      alert("Seleccione una operación valida");
  }
}

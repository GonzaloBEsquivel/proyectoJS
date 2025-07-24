console.log('Todo funciona de maravilla!!!');

let password = 1234;

let passwordIngresado = prompt('Ingrese su contraseña: ');
while(password != passwordIngresado) {
    passwordIngresado = prompt('Contraseña incorrecta, intente de nuevo: ');
}
alert('Ingreso exitoso');

const usuarios = [
    {nombre: 'Juan', edad: 18, acettaTerminos: true},
    {nombre: 'Maria', edad: 17, acettaTerminos: false},
    {nombre: 'Jose', edad: 16, acettaTerminos: false},
    {nombre: 'Belen', edad: 30, acettaTerminos: true},
    {nombre: 'Ara', edad: 28, acettaTerminos: true},
];
for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >= 18) {
        console.log(usuarios[i].nombre)
    }
    
}

//Uso de ?? en comparaciones
const mensaje = document.getElementById('mensaje');
const boton = document.getElementById('cambiarDescuento');

let descuentoInicial;

const descuentoPredeterminado = 10;
let descuentoActual = descuentoInicial ?? descuentoPredeterminado;
mensaje.textContent = `El descuento es de ${descuentoActual}%`;

boton.addEventListener('click', () => {
    let descuentoIngresado = prompt('Ingrese el descuento solicitado: ');
    descuentoIngresado = Number(descuentoIngresado);
    if(descuentoIngresado > 0 && descuentoIngresado < 100){
        descuentoActual = descuentoIngresado ?? descuentoPredeterminado;
        mensaje.textContent = `El descuento es de ${descuentoActual}%`;
    } else {
        alert('Ingrese un descuento valido. Entre 0 y 100');
    }
})
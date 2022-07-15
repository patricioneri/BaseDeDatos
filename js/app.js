//Defino array donde voy a almacenar los pacientes
const pacientes = [];
let comparacion = null;

//defino función datos que toma valores de inputs, los almacena en array de objetos y luego los guarda en storage
const datos = () => {
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let paciente = {
        nombre: name,
        apellido: lastName,
        edad: age,
        peso: weight,
        altura: height
    }

    //traigo storage y lo guardo en array
    let arrayComparacion = JSON.parse(localStorage.getItem('datosPacientes'));

    //comparo el el objeto con el storage para ver si el paciente ya esta ingresado
    //evaluo si array comparacion es null (cuando no hay pacientes cargados aun). Si es null pasa al else y no hace comparación
    if((arrayComparacion != null ) && arrayComparacion.some( el => el.nombre == paciente.nombre || el.apellido == paciente.apellido)) {
        alert("paciente ingresado previamente");
    } else {
        pacientes.push(paciente);
        localStorage.setItem('datosPacientes', JSON.stringify(pacientes));
    }

    //reseteo inputs
    form.reset();
    }
    

//guardo el nodo button en variable y agrego evento que llama a funcion datos
let agregar = document.getElementById('btn-agregar');
agregar.addEventListener("click", datos);

//almaceno nodo table en variable
const table = document.getElementById('table');


//defino funcion que crea una fila de tabla por cada iteracion y guarda datos de pacientes en esta
const mostrar = () => {
    (JSON.parse(localStorage.getItem('datosPacientes'))).forEach(paciente => {
        let infoPaciente = document.createElement('tr');
        infoPaciente.innerHTML = `<td>${paciente.nombre}</td><td>${paciente.apellido}</td><td>${paciente.edad}</td><td>${paciente.peso}</td><td>${paciente.altura}</td>`;
        table.append(infoPaciente);
});
}

//guardo nodo button en variable y agrego evento que llama a funcion mostrar
let informacion = document.getElementById('btn-mostrar');
informacion.addEventListener("click", mostrar);


//almaceno div contenedor en variable
const resultadoIMC = document.getElementById('resultadoIMC');
const resultadoEdad = document.getElementById('resultadoEdad');

//defino funcion que busca paciente y calcula el IMC
const imc = () => {
    let nombreIMC = document.getElementById('nameIMC').value;
    let apellidoIMC = document.getElementById('lastNameIMC').value;
    let busqueda = (JSON.parse(localStorage.getItem('datosPacientes'))).find(el => el.nombre == nombreIMC || el.apellido == lastNameIMC);

    let objectImc = {
        imc: (busqueda.peso / (busqueda.altura * busqueda.altura)),
        edadImc: busqueda.edad
    } 
    
    // desestructuración de objeto
    let {imc,edadImc} = objectImc;
    
    resultadoIMC.append(Math.round(imc));
    resultadoEdad.append(edadImc);

    if(imc <= 25 && imc >= 18.5) {
        alert("Peso normal")
    } else if (imc < 18.5) {
        alert("Peso debajo de lo recomendado");
    } else if (imc > 25) {
        alert("Peso por arriba de lo recomendado");
    }
}

//almaceno nodo del boton y agrego evento que llama a funcion imc
let calcular = document.getElementById('btn-calcular');
calcular.addEventListener("click", imc);
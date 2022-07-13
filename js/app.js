//Defino array donde voy a almacenar los pacientes
const pacientes = [];

//defino función datos que tomar valores de inputs, los almacena en array de objetos y luego los guarda en storage
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

    pacientes.push(paciente);
    localStorage.setItem('datosPacientes', JSON.stringify(pacientes));

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
//guardo nodo button en variable y agrego evento que llama a funcin mostrar
let informacion = document.getElementById('btn-mostrar');
informacion.addEventListener("click", mostrar);


//almaceno div en variable
const resultadoIMC = document.getElementById('resultadoIMC');

//defino funcion que busca paciente y calcula el IMC
const imc = () => {
    let nombreIMC = document.getElementById('nameIMC').value;
    let apellidoIMC = document.getElementById('lastNameIMC').value;
    let busqueda = (JSON.parse(localStorage.getItem('datosPacientes'))).find(el => el.nombre == nombreIMC || el.apellido == lastNameIMC);
    let imc = (busqueda.peso / (busqueda.altura * busqueda.altura));
    

    resultadoIMC.append(imc);
}

//almaceno nodo del boton y agrego evento que llama a funcion imc
let calcular = document.getElementById('btn-calcular');
calcular.addEventListener("click", imc);
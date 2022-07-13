const table = document.getElementById('table');

const arrayPacientes = JSON.parse(localStorage.getItem('datosPacientes'));

arrayPacientes.forEach(el => {
        let infoPaciente = document.createElement('tr');
        infoPaciente.innerHTML = `<td>${paciente.nombre}</td><td>${paciente.apellido}</td><td>${paciente.edad}</td><td>${paciente.peso}</td><td>${paciente.altura}</td>`;
        table.append(infoPaciente);
});
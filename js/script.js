var studente = {
    nome: 'matteo',
    cognome: 'iovane',
    age: 29
}


var firstStudentHtml = document.querySelector('.first-student');

for (var key in student) {
    firstStudentHtml.innerHTML += key + ': ' + studente[key] + '<br />';
}



var listaStudenti = [
    {
        nome: 'Gianluca',
        cognome: 'Iovane',
        age: 25
    },
    {
        nome: 'Eleonra',
        cognome: 'Iovane',
        age: 23
    }
];

for (var i = 0; i < studentsList.length; i++) {
    console.log(listaStudenti[i].nome, listaStudenti[i].cognome);
   }

var classe = {
    name: 'iovane',
    students: [
        {
            nome: 'matteo',
            cognome: 'iovane',
            age: 29
        },
        {
            nome: 'Gianluca',
            cognome: 'Iovane',
            age: 25
        }
    ]
}

for (var x = 0; x < classe.students.length; x++) {
    console.log(classe.students[x].nome, classe.students[x].cognome);
    
}



var nuovoNome = prompt('Inserisci il nome dello studente');
var nuovoCognome = prompt('Inserisci il cognome dello studente');
var nuovaEtà = prompt('Inserisci l\'età dello studente');

studentsList.push({
    nome: nuovoNome,
    cognome: nuovoCognome,
    age: nuovaEtà
});
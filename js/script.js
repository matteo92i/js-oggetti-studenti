var studente = {
    nome: 'matteo',
    cognome: 'iovane',
    age: 29
}


var firstStudentHtml = document.querySelector('#first-student');

for (var key in studente){
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

for (var i = 0; i < listaStudenti.length; i++) {
    console.log(listaStudenti[i].nome, listaStudenti[i].cognome);
   }

   var nuovoNome = prompt('Inserisci il nome dello studente');
   
   var nuovoCognome = prompt('Inserisci il cognome dello studente');
   var nuovaEtà = prompt('Inserisci l\'età dello studente');
   
   listaStudenti.push({
       nome: nuovoNome,
       cognome: nuovoCognome,
       age: nuovaEtà
   });


console.log(listaStudenti)
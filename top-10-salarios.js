//Helpers
//Function para calcular media aritmética(promdedio)
function calcularMediaAritmetica(lista){
  const sumaLista = lista.reduce(

    function(valorAcumulado = 0, nuevoElemento){
      return valorAcumulado + nuevoElemento;
    }

  );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

//Calculando la mediana de los salarios
function medianaSalarios(lista){

  const mitad = parseInt (lista.length / 2); //tonces mitad vale 3

  if(esPar(lista.length)){ //llamamos la function esPar

    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]); //sacamos la mediana
    return mediana;

  }else{
    const personaMitad = lista[mitad];
    return personaMitad;
  }

}

//Averiguar si si la cantidad de elem. de la lista es par o no.
function esPar(numero){
  return (numero % 2 === 0);
}


//Nuevo array con el salario de cada uno solamente.
const salariosTimo = timo.map(

  function(persona){
    return persona.salary;
  }

);

//Ordenado de menor a mayor a través de la resta de A - B.
const salariosTimoSorted = salariosTimo.sort(

  function(salaryA, salaryB){
    return salaryA - salaryB;
  }

);



const medianaGeneralTimo = medianaSalarios(salariosTimoSorted);
//método splice
const spliceStart = parseInt((salariosTimoSorted.length * 90) / 100);//5
const spliceCount = salariosTimoSorted.length - spliceStart;//6 - 5 = 1

const salariosTimoTop10 = salariosTimoSorted.splice(
  spliceStart,//5
  spliceCount,//1
);

const medianaTop10Timo = medianaSalarios(salariosTimoTop10);


console.log({
  medianaGeneralTimo, //es el resultado de la mediana de timo que sacamos con medianaSalarios
  medianaTop10Timo,
});

/* Resultado:
medianaGeneralTimo: 725
medianaTop10Timo: 1000
*/
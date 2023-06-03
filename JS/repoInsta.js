//Funciones para el archivo repoInstantanea.html
function repoInstantanea(){
    const input1 = document.getElementById("Demanda");//Manda a llamar atributo id Demanda
    const valor1 = input1.value;//Recuperara lo traido desde el input en un arreglo
    const dem = valor1;//le asigna lo traido del input a un arreglo de una constante 
    const demanda = parseInt(dem);//Transforma el arreglo en un número
    console.log("Demanda: "+demanda);
    
    const input2 = document.getElementById("Lote");
    const valor2 = input2.value;
    const lot = valor2;
    const lote = parseInt(lot);
    console.log("Lote: "+lote);
    
    const input3 = document.getElementById("Entrega");
    const valor3 = input3.value;
    const ent = valor3;
    const entrega = parseInt(ent);
    console.log("Entrega: "+entrega);
    
    let input4 = document.getElementById("DiasL");
    let valor4 = input4.value;
    let dias = valor4;
        if(dias == ''){//Como es un arreglo, si esta vacio, se transformara a los dias por defecto 360
            dias = '360';
        }
    console.log(dias);
    let diasL = parseInt(dias);
    console.log("Dias laborales: "+diasL);

    let calculo1 = demanda/lote;

    console.log("Num pediddos: "+Math.round(calculo1));

    let laboran = diasL/calculo1;

    let invSeguridad = (lote/laboran)*entrega;

    let PR = laboran-entrega;

    console.log(calculo1);
    console.log(laboran);
    console.log(invSeguridad);
    console.log(PR);

    document.getElementById("resultados").style.display = "block";//Para hacer que se quite lo oculto a los resultados que se hicieron

    document.getElementById("NumPedidos").innerHTML = "Número de pedidos "+Math.round(calculo1);
    document.getElementById("Duracion").innerHTML = "Un pedido puede durar "+ Math.round(laboran) +" días";
    document.getElementById("IS").innerHTML = "El inventario de seguridad es: "+ Math.round(invSeguridad);
    document.getElementById("PR").innerHTML = "Su punto de reorden será a los "+ Math.round(PR) +" días";
}
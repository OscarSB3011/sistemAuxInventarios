//Funciones para el archivo repoInstantanea.html
function repoInstantanea(){

    //-------------RELACIONADO A DEMANDA-----------------
    const input1 = document.getElementById("Demanda");//Manda a llamar atributo id Demanda
    const valor1 = input1.value;//Recuperara lo traido desde el input en un arreglo
    if( valor1 === ''){//Se agrega la condición para que el campo sea obligatorio de llenar
          
      
        swal.fire({
          title: 'Por favor, llene todos los campos obligatorios',
          icon:'warning'
        });
    
        return;
        }
    const dem = valor1;//le asigna lo traido del input a un arreglo de una constante
    const demanda = parseInt(dem);//Transforma el arreglo en un número

    if( demanda == 0){
        swal.fire({
          title: 'Demanda',
          text: 'La demanda no puede ser 0',
          icon:'warning',
          footer:'Revise sus datos e intente de nuevo',
        });
        return;
      }
    
    //-----------------------RELACIONADO A LOTE---------------------
    const input2 = document.getElementById("Lote");
    const valor2 = input2.value;
    if( valor2 === ''){//Se agrega la condición para que el campo sea obligatorio de llenar
          
      
        swal.fire({
          title: 'Por favor, llene todos los campos obligatorios',
          icon:'warning'
        });
    
        return;
        }
    const lot = valor2;
    const lote = parseInt(lot);

    if( lote == 0 ){
        swal.fire({
          title: 'Lote',
          text: 'El lote no puede ser 0',
          icon:'warning',
          footer:'Revise sus datos e intente de nuevo',
        });
        return;
      }
    
    //-----------------RELACIONADO A ENTREGA-----------------------------
    const input3 = document.getElementById("Entrega");
    const valor3 = input3.value;
    if( valor3 === ''){//Se agrega la condición para que el campo sea obligatorio de llenar
          
      
        swal.fire({
          title: 'Por favor, llene todos los campos obligatorios',
          icon:'warning'
        });
    
        return;
        }
    const ent = valor3;
    const entrega = parseInt(ent);

    if( entrega == 0 ){
        swal.fire({
          title: 'Entrega',
          text: 'Entrega no puede ser 0',
          icon:'warning',
          footer:'Revise sus datos e intente de nuevo',
        });
        return;
      }

    //----------------RELACIONADO A LOS DIAS LABORALES--------------------
    let input4 = document.getElementById("DiasL");
    let valor4 = input4.value;
    let dias = valor4;
    console.log(dias);
        if(dias == '' || dias == 0){//Como es un arreglo, si esta vacio, se transformara a los dias por defecto 360
            dias = '360';
        }
        if (dias > 365){

            swal.fire({
                title: 'Dias laborales',
                text:'Este campo no debe rebasar los 365 días',
                icon:'info'
            });
            return;
            }
        if (dias < 300){

            swal.fire({
                title: 'Dias laborales',
                text:'Este campo no debe tener menos de 300 días',
                icon:'info'
            });
            return;
            }
        
    console.log(dias);
    let diasL = parseInt(dias);

    let calculo1 = demanda/lote;

    let laboran = diasL/calculo1;

    let invSeguridad = (lote/laboran)*entrega;

    let PR = laboran-entrega;

    document.getElementById("resultados").style.display = "block";//Para hacer que se quite lo oculto a los resultados que se hicieron

    document.getElementById("NumPedidos").innerHTML = "Número de pedidos: "+Math.round(calculo1);
    document.getElementById("Duracion").innerHTML = "Un pedido puede durar "+ Math.round(laboran) +" días";
    document.getElementById("IS").innerHTML = "El inventario de seguridad es: "+ Math.round(invSeguridad) +" unidades";
    document.getElementById("PR").innerHTML = "Su punto de reorden será a los: "+ Math.round(PR) +" días";
}
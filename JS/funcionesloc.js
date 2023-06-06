const formulario = document.querySelector("#formulario");

   //Crear el evento
   formulario.addEventListener("submit", consultarLote)


  function consultarLote(e){
    e.preventDefault();

        let D = document.querySelector("#D").value; //Recuperamos los datos por medio del ID
        
        const CP = document.querySelector("#CP").value;
       
        const CH = document.querySelector("#CH").value;

        if( D === '' || CP === '' || CH === ''){
          
          swal.fire({
            title: 'Por favor, llene todos los campos obligatorios',
            icon:'warning'
          });
          return;
          }

          if( D == 0 ){
            swal.fire({
              title: 'Demanda',
              text: 'La demanda no puede ser 0',
              icon:'warning',
              footer:'Revise sus datos e intente de nuevo',
            });
            return;
          }
          
          if( CP == 0 ){
            swal.fire({
              title: 'Costo de hacer un pedido',
              text: 'CP no puede ser 0',
              icon:'warning',
              footer:'Revise sus datos e intente de nuevo',
            });
            return;
          }

          
          if( CH == 0 ){
            swal.fire({
              title: 'Costo de mantener una pieza en el inventario',
              text: ' CH no puede ser 0 ',
              icon:'warning',
              footer:'Revise sus datos e intente de nuevo',
            });
            return;
          }

          Q= Math.sqrt ( Math.round((2 *D *CP)/ CH )); // lOTE OPTIMO DE PRODUCCIÓN 
          //  Math.round(Q);
          Q = Math.floor(Q);
      //  alert(Q);

// costo total cuado se produce 
           CT= ((Q/2)*CH)  + (D /Q) * (CP);
           CT= Math.round(CT);
          //  CT = CT.toFixed(2); 
      //  alert(CT);

      document.getElementById("resultados").style.display = "block";//Para hacer que se quite lo oculto a los resultados que se hicieron

      let respuestaQ = document.getElementById("respuestaQ");
      respuestaQ.textContent = "El Lote Óptimo de Compra es de: " + Q;
      
      let respuestaCT = document.getElementById("respuestaCT");
      respuestaCT.textContent = "El Costo Total es de: " + CT;
        
      }
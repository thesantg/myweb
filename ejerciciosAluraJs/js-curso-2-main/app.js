//Aprobacion por nota
//Declaracion de variable
let notaUsuario = parseInt(prompt('Ingrese su Nota?'));
  if(notaUsuario  >= 90 && notaUsuario <= 100){
    console.log('Excelente');
    }else if(notaUsuario >= 70 && notaUsuario <= 89){
      console.log('Aprobado');
      }else if(notaUsuario >= 0 && notaUsuario <= 69){
        console.log('Reprobado');
        }else{
          console.log('Nota no valida');
        }
let array = [2,4,,3,5,78,9];
let i = 0;
function alCuadrado(){
  if(i < array.length){ 
  array[i] = array[i]*2;
  i++;
  alCuadrado()
  }
  
  console.log(array);
}
alCuadrado();
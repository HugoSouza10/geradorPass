


let sizeInput = document.querySelector('#size');
let displayRange = document.querySelector('#displayGerator');
let result = document.querySelector('.result');
let valueDefault = 50;
let valueCurrent;
let newPass;
let memorizesEasy = 5;

let update = document.querySelector('#update');
let optionGerator = document.querySelector('#optionGerator');
let checkSelected = document.querySelectorAll('.boxGeration input[type="checkbox"]');
let copyButtun = document.querySelector('#copy');



 let arrayPoss = [
   'A', 'B', 'C', 'D','E',
   'F', 'G', 'H', 'I', 'J',
   'K', 'L', 'M', 'N', 'O',
   'P', 'Q', 'R', 'S', 'T',
   'U', 'V', 'W', 'X', 'Y',
   'Z', '1','2', '3', '4',
   '5', '6', '7', '8', '9',
   '10','^','}','$','#','^~',
   '_$', '$%', '%', '['
]

let arrayPossOriginal = [...arrayPoss];



copyButtun.addEventListener('click',()=>{
     let copyPass = result.innerHTML;
     navigator.clipboard.writeText(copyPass);
     alert('Copiado com sucesso!');
})



optionGerator.addEventListener('change',(event)=>{
      let opPass = parseInt(event.target.value);
      if(opPass == 1) {
         clearcreen();
         valueCurrent = valueDefault;  
         displayRange.innerHTML = valueCurrent; 
         renderPass(valueCurrent);
      }

      if(opPass == 2) {
         valueCurrent = memorizesEasy;
         renderPass(valueCurrent);
         displayRange.innerHTML = memorizesEasy;
      }

      if(opPass == 3) {
         clearcreen();
         valueCurrent = memorizesEasy;
         let numeros = arrayPoss.filter(item => /\d/.test(item));
         arrayPoss = numeros;
         console.log(numeros);
         renderPass(valueCurrent);
         displayRange.innerHTML = valueCurrent;
      } else {
         arrayPoss = [...arrayPossOriginal];;
      }

});



checkSelected.forEach((item)=>{
     item.addEventListener('change',()=>{
        if(item.checked){ 
           if(item.value == 'removeNumeros'){ 
            console.log('Removendo numeros do array poss');
            arrayPoss = arrayPoss.filter(element => {
               return !/^\d+$/.test(element);
           });
               
           }else{
               arrayPoss = arrayPoss.filter(element => {
                  return /^[a-zA-Z0-9]+$/.test(element);
               });
               console.log('Removendo Símbolos');
           } 
        }else {
         arrayPoss = [...arrayPossOriginal];
        }
     
        clearcreen();
        generateDefault(valueCurrent, arrayPoss);
     })
})


let defaultUpdate = window.onload = ()=>{
      if(valueCurrent>0){
         renderPass(valueCurrent);
         displayRange.innerHTML = valueCurrent;
      }else{
         displayRange.innerHTML = sizeInput.value;
         renderPass(valueDefault);
      }
}


update.addEventListener('click',()=>{
   clearcreen();
   defaultUpdate();
});


function clearPass(value){
   console.log(value)
   for(let i = 0; i<value; i++){
      newPass = '';
   }
  
}

function clearcreen() {
   result.innerHTML = '';
}


function rangeInput(value){
   valueCurrent = value;
   displayRange.innerHTML = value;
   renderPass(sizeInput.value);
}


//FUNÇÃO GERAR SENHA 

function renderPass(value){
   console.log(value)
    if(value == valueDefault ){
       generateDefault(value, arrayPoss);

    }
    if(value>valueDefault || value<valueDefault){
       clearPass(value);
       result.innerHTML = newPass;
       generateRandom(value, arrayPoss);
    }

    if(value < valueDefault) {
      clearPass(value);
      result.innerHTML = newPass;
      generateRandom(value, arrayPoss);
    }

    
}


function generateDefault(value, arrayPoss){
   
    let randomLetter = false;

   for(let i = 0; i<value; i++){
      let randomOne = '';
     
      clearPass(value);
      let numberRandomPoss = Math.floor(Math.random() * arrayPoss.length);


      if(randomLetter == true){
         randomOne = arrayPoss[numberRandomPoss];
         newPass+=randomOne;
         result.append(newPass);
         randomLetter = false;
      }else{
         randomOne = arrayPoss[numberRandomPoss];
         newPass+=randomOne.toLocaleLowerCase();
         result.append(newPass);
         randomLetter = true;
      }

      valueCurrent = value;
   }
}



function generateRandom(value, arrayPoss){
   for(let i = 0; i<value; i++){
      let randomOne = '';
      let newPass = '';
      let numberRandomPoss = Math.floor(Math.random() * arrayPoss.length);
      // Aqui estamos sorteando uma posição de algum caracter.

      //Aqui a gente gera o caracter
      randomOne = arrayPoss[numberRandomPoss];
      newPass+=randomOne;
      result.append(newPass);
      
   }
}








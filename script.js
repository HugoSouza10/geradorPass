


let sizeInput = document.querySelector('#size');
let displayRange = document.querySelector('#displayGerator');
let result = document.querySelector('.result');
let valueDefault = sizeInput.value;
let update = document.querySelector('#update');
let optionGerator = document.querySelector('#optionGerator');
let checkSelected = document.querySelectorAll('.boxGeration input[type="checkbox"]');

console.log(checkSelected);
 let valueCurrent; 
 let newPass;
 let memorizesEasy = sizeInput.min;



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




let copyButtun = document.querySelector('#copy');


copyButtun.addEventListener('click',()=>{
     let copyPass = result.innerHTML;
     navigator.clipboard.writeText(copyPass);
     alert('Copiado com sucesso!')
})




optionGerator.addEventListener('change',(event)=>{
      let opPass = parseInt(event.target.value);

      console.log(opPass)

      switch (opPass) {
         case 1:
            result.innerHTML = '';
            valueCurrent = valueDefault;  
            displayRange.innerHTML = valueCurrent; 
            renderPass(valueDefault);
            break;

         case 2:
            result.innerHTML = '';
            valueCurrent = memorizesEasy;
            renderPass(memorizesEasy);
            displayRange.innerHTML = memorizesEasy;
            break;   
      
         default:
            break;
      }
      

});



checkSelected.forEach((item)=>{
     item.addEventListener('change',()=>{
        if(item.checked == true){ 
           if(item.value == 'removeNumeros'){ 

               for(let i=0; i<arrayPoss.length; i++){
                 
               }
               console.log('Removendo numeros do array poss');
           }else{
               console.log('Removendo Símbolos');
           }   
            
        }
     })
})

 



let defaultUpdate = window.onload = ()=>{

  
      update.addEventListener('click',()=>{
         result.innerHTML = '';
         defaultUpdate();
         
      });


      if(valueCurrent>0){
         renderPass(valueCurrent);
         displayRange.innerHTML = valueCurrent;
      }else{
         displayRange.innerHTML = sizeInput.value;
         renderPass(valueDefault);
      }
      
       
}


function clearPass(value){
   for(let i = 0; i<value; i++){
      newPass = '';
   }

  
}


function rangeInput(value){
   valueCurrent = value;
   displayRange.innerHTML = value;
   renderPass(sizeInput.value);
}


//FUNÇÃO GERAR SENHA 

function renderPass(value){
    if(value == valueDefault ){
       generateDefault(value, arrayPoss);

    }else{
       if(value>valueDefault || value<valueDefault){
         clearPass(value);
          result.innerHTML = newPass;
          generateRandom(value, arrayPoss);
          
       }
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

   let randomLetter = true;

   console.log(value);

   for(let i = 0; i<value; i++){

      let randomOne = '';
      let newPass = '';
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
      
     
   }
}








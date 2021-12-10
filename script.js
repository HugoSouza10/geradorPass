

//ESCOPO GLOBAL
let sizeInput = document.querySelector('#size');
let displayRange = document.querySelector('#displayGerator');
let result = document.querySelector('.result');
let valueDefault = sizeInput.value;
let update = document.querySelector('#update');
let optionGerator = document.querySelector('#optionGerator');
let checkSelected = document.querySelectorAll('.boxGeration input[type="checkbox"]');

console.log(checkSelected);
//GUARDA O VALOR ATUAL
let valueCurrent; 
 //VARIAVÉL PARA ARMAZENAR A NOVA SENHA
 let newPass;
 //VARIÁVEL PARA GERAR SENHA FÁCIL, PEGAMOS O VALOR MINÍMO 
 let memorizesEasy = sizeInput.min;


 //POSSIBILIDADE DE SENHA

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




//FUNÇÃO COPIAR 
let copyButtun = document.querySelector('#copy');


copyButtun.addEventListener('click',()=>{
     let copyPass = result.innerHTML;
     //COMANDO PARA COPIAR A SENHA
     navigator.clipboard.writeText(copyPass);
     alert('Copiado com sucesso!')
})



//FUNÇÃO PARA ESCOLHER A OPÇÃO DO GERADOR

optionGerator.addEventListener('change',(event)=>{
      let opPass = parseInt(event.target.value);

      console.log(opPass)

      switch (opPass) {
         case 1:
            //LIMPANDO A TELA
            result.innerHTML = '';
            valueCurrent = valueDefault;  //ATUALIZANDO O VALOR ATUAL COM O VALOR PADRÃO
            displayRange.innerHTML = valueCurrent; //MOSTRANDO O VALOR NA TELA DO RANGE
            renderPass(valueDefault);
            break;

         case 2:
            result.innerHTML = '';
            valueCurrent = memorizesEasy; //ATUALIZANDO O VALOR ATUAL PARA A SENHA ALEATÓRIA FÁCIL
            renderPass(memorizesEasy);
            //ATUALIZANDO O DISPLAY DO CHANGE
            displayRange.innerHTML = memorizesEasy;
            break;   
      
         default:
            break;
      }
      

});



//VERIFICANDO SE ALGUÉM SELECIONOU O CHECKBOX PARA REMOVER NÚMERO OU SÍMBOLOS

//COMO O CHECK É UM ARRAY DO SELECTOR ALL. ENTÃO A GENTE PRECISA FAZER UM MAP OU FOR EACH PARA PODER PEGAR OS ITENS E ADICIONAR EVENTOS
checkSelected.forEach((item)=>{
     item.addEventListener('change',()=>{
        if(item.checked == true){ //VERIFICANDO SE O VALOR DO ITEM ENCONTRADO NO LOOP É IGUAL A TRUE, POIS SIGNIGICA QUE ELE TÁ SELECIOANDO
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

 






//DEFININDO VALOR PADRÃO DO INPUT GERADOR AO INCIAR

let defaultUpdate = window.onload = ()=>{

   
      //FUNÇÃO ATUALIZAR SENHA
      update.addEventListener('click',()=>{
         //LIMPANDO A TELA 
         result.innerHTML = '';
         defaultUpdate();
         
      });



      //VERIFICA SE EXISTE UM VALOR RECENTE
      if(valueCurrent>0){
         renderPass(valueCurrent);
         displayRange.innerHTML = valueCurrent;
      }else{
         //SE NÃO EXISTIR UM VALOR RECENTE, ENTÃO PEGAMOS O VALOR GERADO PELO O INPUT OU PADRÃO
         displayRange.innerHTML = sizeInput.value;
         renderPass(valueDefault);
      }
      
       
}




//FUNÇÃO LIMPAR, A GENTE MANDA O VALUE, POIS É O RESPONSÁVEL PELO O LOOP
function clearPass(value){
   for(let i = 0; i<value; i++){
      newPass = '';
   }

  
}


//FUNÇÃO PARA DEFINIR O VALOR DO RANGE
function rangeInput(value){
   //TROCANDO O VALOR PADRÃO DO VALOR ATUAL
   valueCurrent = value;
   displayRange.innerHTML = value;
   renderPass(sizeInput.value);
}


//FUNÇÃO GERAR SENHA 

function renderPass(value){
    //GERANDO SENHA PADRÃO COM LIMITE PADRÃO TRAVADO
    if(value == valueDefault ){
       generateDefault(value, arrayPoss);

    }else{
      //GERANDO SENHA COM O CAMPO RANGE
       if(value>valueDefault || value<valueDefault){
         clearPass(value);
          result.innerHTML = newPass;
          generateRandom(value, arrayPoss);
          
       }
    }
}



/*FUNÇÃO GERAR SENHA PADRÃO */

function generateDefault(value, arrayPoss){
    //VARIAVÉL PARA ALTERNAR A LETRA
    let randomLetter = false;

   for(let i = 0; i<value; i++){
      //VARIÁVEL PARA GUARDAR UM ITEM ALEATÓRIO
      let randomOne = '';
     
      clearPass(value);
        //GERANDO NÚMERO ALEATÓRIO PARA GERAR SENHA
      let numberRandomPoss = Math.floor(Math.random() * arrayPoss.length);


      if(randomLetter == true){
         //PEGANDO UM ITEM DO ARRAY DE FORMA ALETATÓRIA
         randomOne = arrayPoss[numberRandomPoss];
         newPass+=randomOne;
         //MOSTRANDO NA TELA
         result.append(newPass);
         randomLetter = false;
      }else{
         randomOne = arrayPoss[numberRandomPoss];
         //TRANFORMANDO EM MINUSCULA
         newPass+=randomOne.toLocaleLowerCase();
         //MOSTRANDO NA TELA
         result.append(newPass);
         randomLetter = true;
      }

      //ARMAZENANDO O VALOR ATUAL
      valueCurrent = value;

     

   }

  
}





/*FUNÇÃO GERAR SENHA ALEATÓRIA */

function generateRandom(value, arrayPoss){

   //VARIAVÉL PARA ALTERNAR A LETRA
   let randomLetter = true;

   console.log(value);

   for(let i = 0; i<value; i++){

      //VARIÁVEL PARA GUARDAR UM ITEM ALEATÓRIO
      let randomOne = '';
      let newPass = '';
        //GERANDO NÚMERO ALEATÓRIO PARA GERAR SENHA
      let numberRandomPoss = Math.floor(Math.random() * arrayPoss.length);

      if(randomLetter == true){
         //PEGANDO UM ITEM DO ARRAY DE FORMA ALETATÓRIA
         randomOne = arrayPoss[numberRandomPoss];
         newPass+=randomOne;
         //MOSTRANDO NA TELA
         result.append(newPass);
         randomLetter = false;
      }else{
         randomOne = arrayPoss[numberRandomPoss];
         //TRANFORMANDO EM MINUSCULA
         newPass+=randomOne.toLocaleLowerCase();
         //MOSTRANDO NA TELA
         result.append(newPass);
         randomLetter = true;
      }
      
     
   }
}






/*https://codepen.io/alexandrebatista83/pen/abdKyqQ */


//MÉTODO JOIN: SERVE PARA PEGAR STRING DE UM ARRAY


//FUNÇÃO COPIAR TEXTO https://programandosolucoes.dev.br/2021/06/08/copiar-texto-javascript/




/*

O QUE APRENDEMOS?


-LÓGICA
- IF E ELSE
- APPEND
- ARRAY
- FUNÇÕES
- FUNÇÃO CLIPBORD (COPIAR CONTEÚDO);
- LOOP DENTRO DE ARRAY


VOU SER O MELHOR PROGRAMADOR DO MUNDO!!!

NADA É IMPOSSÍVEL PRA QUEM QUER


*/
var form = document.getElementById('form');
var campoA = document.getElementById('campoA');
var campoB = document.getElementById('campoB')



form.addEventListener('submit', function(e){
        
    e.preventDefault();
    
    Verificar()

})

function Verificar(){
    
    const validResult = `Valid result! B= ${campoB.value} > A= ${campoA.value}`;
    const invalidResult = `Invalid result, B = ${campoB.value} is not > A= ${campoA.value}`
    if(campoA.value < campoB.value){
        //mensagem positiva 
        const successMsg = document.querySelector(`.valid-message`);
        successMsg.innerHTML = validResult;
        successMsg.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    }else{
        //mensagem negativa\
        const unsuccessMsg = document.querySelector(`.invalid-message`);
        unsuccessMsg.innerHTML = invalidResult;
        unsuccessMsg.style.display = 'block'

        campoA.value = '';
        campoB.value = '';
    }
}
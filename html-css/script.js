let numeroAtual = document.getElementById("numero");
let valor = numeroAtual.innerHTML;

function aumento(){
    valor++;
    numeroAtual.innerHTML = valor;
    }
function decremento(){
    valor--;
    numeroAtual.innerHTML = valor;
    }

function addTask(){
    let task = document.getElementById('tarefa')
    let tarefa = task.value
    task.innerHTML =''
    let lista = document.getElementById('lista')
    lista.innerHTML = lista.innerHTML +`<li>${tarefa}</li><br>`
    task.value =''
}
function resetar(){
    let lista = document.getElementById('lista')
    lista.innerHTML = ''
}
let lista = document.getElementById('lista');
lista.addEventListener('click',function riscador(ev){
   
    if(ev.target.tagName == 'LI'){
    ev.target.classList.toggle('checked');
    }
}).preventDefault()
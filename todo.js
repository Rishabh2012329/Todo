const addbutton=document.querySelector('.add');
const todoul=document.querySelector('.todolist');
const inpu=document.querySelector('.inpu');
const filter=document.querySelector('.filt');
const alli=document.getElementsByTagName('li')

addbutton.addEventListener("click",todo);
document.addEventListener('DOMContentLoaded',gettodo)

function todo(event){
 event.preventDefault();
 const tododiv = document.createElement('div');
 const todoli =document.createElement('li');
 const trash=document.createElement('button');
 const complete=document.createElement('button');
 complete.classList.add('com');
 tododiv.classList.add('di')
 trash.classList.add('styl');
 trash.innerHTML='-';
 complete.innerHTML='+';
 let ip=inpu.value
savetodo(ip);
 todoli.innerHTML=inpu.value;

 todoli.classList.add('list');
 tododiv.appendChild(todoli);
 tododiv.appendChild(complete);
 tododiv.appendChild(trash);
 todoul.appendChild(tododiv);
 inpu.value=null;
 trash.addEventListener('click',deletelist);
 complete.addEventListener('click',comp);
}

function deletelist(e){
    removetodo(e.target.parentElement);
    e.target.parentElement.classList.add('fall');
    
    addEventListener('transitionend',function(){
        e.target.parentElement.remove()
        }
        );
        
}
function comp(e){
    e.target.parentElement.classList.toggle('compl')
}
filter.addEventListener('click',filtr);

function filtr(){
  
    for(let i=0;i<alli.length;i++){
        if(alli[i].parentElement.classList.contains('compl')){
            alli[i].parentElement.remove();
            i=i-1;
        }
    }
}

function savetodo(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos= [];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function gettodo(){
    let todos;
    if(localStorage.getItem('todos')!=null){
        todos=JSON.parse(localStorage.getItem('todos'));
        todos.forEach(function(todo){
            const tododiv = document.createElement('div');
            const todoli =document.createElement('li');
            const trash=document.createElement('button');
            const complete=document.createElement('button');
            complete.classList.add('com');
            tododiv.classList.add('di')
            trash.classList.add('styl');
            trash.innerHTML='-';
            complete.innerHTML='+';
            todoli.innerHTML=todo;
            todoli.classList.add('list');
            tododiv.appendChild(todoli);
            tododiv.appendChild(complete);
            tododiv.appendChild(trash);
            todoul.appendChild(tododiv);
            trash.addEventListener('click',deletelist);
            complete.addEventListener('click',comp);
        });
    }
}

function removetodo(todo){
    let todos;
    if(localStorage.getItem('todos')!==null){
        todos=JSON.parse(localStorage.getItem('todos'));
        todos.splice(todos.indexOf(todo.children[0].innerText),1);
        localStorage.setItem("todos",JSON.stringify(todos));
    }
    console.log(todo.children[0].innerText)
}
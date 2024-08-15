let inputEl = document.querySelectorAll("input")[0]
let listEl = document.querySelectorAll("ul")[0]
let btnEl = document.getElementById("btn")
let todoList =[]

function todoFunc (){
if(inputEl.value === ""){
alert("please enter a todo task")
}
else if( btnEl.innerText === "Add"){
    addTodo ()
}
else if(    btnEl.innerText = "Update"){
update()
}

}

function addTodo (){
let todo = inputEl.value
todoList.push(todo)
inputEl.value = ""
printTodo()
}

function printTodo(){
     listEl.innerHTML = ""
    for(let i = 0 ; i< todoList.length; i++){
       listEl.innerHTML += `    <li id = "todo${i}">${todoList[i]} </li>
                               <button onclick="edit(${i})">Edit</button>
                               <button onclick="delet(${i})">Delete</button>
                              
`    
    }
}

function delet(index){
todoList.splice(index , 1)
printTodo()

}
let indexNum;
function edit (id){
    let todoEl  = document.getElementById("todo"+id)
    inputEl.value = todoEl.innerText
    btnEl.innerText = "Update"
    indexNum = id
}
function update(){
    let todoEl  = document.getElementById("todo"+indexNum)

 todoEl.innerText = inputEl.value
 btnEl.innerText = "Add"
 inputEl.value = ""

}


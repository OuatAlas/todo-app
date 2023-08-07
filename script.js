let moon = document.getElementById("moon");
let sun = document.getElementById("sun");

sun.style.display = "none";

moon.addEventListener("click", () => {

  if(getComputedStyle(moon).display != "none"){
    moon.style.display = "none";
    sun.style.display = "block";
  }
})

sun.addEventListener("click", () => {

  if(getComputedStyle(sun).display != "none"){
    sun.style.display = "none";
    moon.style.display = "block";
  }
})

function mooFunction() {
    let body = document.body;
    body.classList.toggle("body-dark");

    let newtask = document.querySelector('.newtask');
    newtask.classList.remove("newtask");
    newtask.classList.add("newtask-dark");

    let tasks = document.querySelector('.tasks');
    tasks.classList.remove("tasks");
    tasks.classList.add("tasks-dark");

    let task = document.querySelector('.task');
    task.classList.remove("task");
    task.classList.add("task-dark");

    let checkhead = document.querySelector('.check-head');
    checkhead.classList.remove("check-head");
    checkhead.classList.add("check-head-dark");

    let checkcontent = document.querySelector('.check-content');
    checkcontent.classList.remove("check-content");
    checkcontent.classList.add("check-content-dark");
 }

function sunFunction() {
    let body = document.body;
    body.classList.toggle("body-dark");

    let newtask = document.querySelector('.newtask-dark');
    newtask.classList.remove("newtask-dark");
    newtask.classList.add("newtask");

    let tasks = document.querySelector('.tasks-dark');
    tasks.classList.remove("tasks-dark");
    tasks.classList.add("tasks");

    let task = document.querySelector('.task-dark');
    task.classList.remove("task-dark");
    task.classList.add("task");

    let checkhead = document.querySelector('.check-head-dark');
    checkhead.classList.remove("check-head-dark");
    checkhead.classList.add("check-head");

    let checkcontent = document.querySelector('.check-content-dark');
    checkcontent.classList.remove("check-content-dark");
    checkcontent.classList.add("check-content");
 }


let current_task = document.querySelectorAll("#task-div");
let btndelete = document.querySelectorAll("#btn-delete");

for(let i=0; i<current_task.length; i++){
    current_task[i].addEventListener("mouseover", () => { btndelete[i].style.display = "block";});
}
for(let i=0; i<current_task.length; i++){
    current_task[i].addEventListener("mouseout", () => { btndelete[i].style.display = "none";});
}


let title = document.querySelector('.title');
let showme = document.querySelector('.showme');

showme.style.display = "none";

title.addEventListener("click", () => {
    title.style.display = "none";
    showme.style.display = "block";
})

document.querySelector('#push').onclick = function(){
    if(document.querySelector('.showme input').value.length == 0){
        alert("Entrer une tâche !!")
    }

    else{ 
        document.querySelector('.tasks').innerHTML += `
            <div class="task" id="task-div">
                <label class="check-content">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <span id="taskname">
                    ${document.querySelector('.showme input').value}
                </span>
                <div class="btndel" id="btn-delete">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                    </svg>
                </div>
            </div>
            `;

        let current_tasks = document.querySelectorAll(".btndel");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

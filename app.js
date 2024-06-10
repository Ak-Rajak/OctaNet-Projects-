let listContainer = document.getElementById('list-container');

let inputbox = document.getElementById('input-box');

function addTask(){
    if(inputbox.value === ''){
        alert("Please enter a task");
    }
    else{
        let task = document.createElement('li');
        task.textContent = inputbox.value;
        listContainer.appendChild(task);

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span);
    }
    inputbox.value= '';
    saveData()
}

listContainer.addEventListener('click' , (el) => {
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked');
        saveData()
    }
    else if(el.target.tagName == 'SPAN' ){
        el.target.parentNode.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem('task', listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem('task')
}

showData()
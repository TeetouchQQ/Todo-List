console.log('test');


function createFolder(){
    console.log('create')
    var folderName = document.getElementById('newProject').value;
    var project_name = document.createElement('p')
    var name = document.createTextNode(folderName)
    project_name.appendChild(name);
    


    var img = document.createElement("IMG");
    img.setAttribute('src','./img/delete.png');
    img.setAttribute("width", "50px");
    img.setAttribute("height", "50px");
    img.setAttribute("alt", "delete");
    

    var p_list = document.getElementById('project_list');
    var div = document.createElement('div');
    div.className = 'card';
    div.appendChild(project_name)
    div.appendChild(img);

    p_list.appendChild(div);

}
function createTask(){
    console.log('create')

    var TaskValue = document.getElementById('TodoName').value;
    var Task_name = document.createElement('p')
    Task_name.className='TaskName';
    var name = document.createTextNode(TaskValue)
    Task_name.appendChild(name);

    

    var del_img = document.createElement("IMG");
    del_img.setAttribute('src','./img/delete.png');
    del_img.setAttribute("width", "50px");
    del_img.setAttribute("height", "50px");
    del_img.setAttribute("alt", "delete");

    var edit_img = document.createElement("IMG");
    edit_img.setAttribute('src','./img/edit.png');
    edit_img.setAttribute("width", "50px");
    edit_img.setAttribute("height", "50px");
    edit_img.setAttribute("alt", "edit");
    

    var Task_list = document.getElementById('Task-Container');
    var div = document.createElement('div');
    div.className = 'TodoItem';

    var nameDiv = document.createElement('div');
    nameDiv.className='Name';


    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className='TaskCheck';

    nameDiv.appendChild(checkbox)
    nameDiv.appendChild(Task_name)
    

    var infoDiv = document.createElement('div');
    infoDiv.className='Info';

    var dateDiv = document.createElement('p')
    dateDiv.className='date';
    var date = document.createTextNode(document.getElementById('birthday').value)
    dateDiv.appendChild(date);

    var piorDiv = document.createElement('p');
    piorDiv.className='priority';
    var pior = document.createTextNode(document.getElementById('priority').value)
    piorDiv.appendChild(pior);

    infoDiv.appendChild(dateDiv);
    infoDiv.appendChild(piorDiv);
    infoDiv.appendChild(edit_img);
    infoDiv.appendChild(del_img);
    

    div.appendChild(nameDiv);
    div.appendChild(infoDiv);

    Task_list.appendChild(div)
}
window.createFolder= createFolder;
window.createTask= createTask;




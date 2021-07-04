/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log('test');\r\n\r\n\r\nfunction createFolder(){\r\n    console.log('create')\r\n    var folderName = document.getElementById('newProject').value;\r\n    var project_name = document.createElement('p')\r\n    var name = document.createTextNode(folderName)\r\n    project_name.appendChild(name);\r\n    \r\n\r\n\r\n    var img = document.createElement(\"IMG\");\r\n    img.setAttribute('src','./img/delete.png');\r\n    img.setAttribute(\"width\", \"50px\");\r\n    img.setAttribute(\"height\", \"50px\");\r\n    img.setAttribute(\"alt\", \"delete\");\r\n    \r\n\r\n    var p_list = document.getElementById('project_list');\r\n    var div = document.createElement('div');\r\n    div.className = 'card';\r\n    div.appendChild(project_name)\r\n    div.appendChild(img);\r\n\r\n    p_list.appendChild(div);\r\n\r\n}\r\nfunction createTask(){\r\n    console.log('create')\r\n\r\n    var TaskValue = document.getElementById('TodoName').value;\r\n    var Task_name = document.createElement('p')\r\n    Task_name.className='TaskName';\r\n    var name = document.createTextNode(TaskValue)\r\n    Task_name.appendChild(name);\r\n\r\n    \r\n\r\n    var del_img = document.createElement(\"IMG\");\r\n    del_img.setAttribute('src','./img/delete.png');\r\n    del_img.setAttribute(\"width\", \"50px\");\r\n    del_img.setAttribute(\"height\", \"50px\");\r\n    del_img.setAttribute(\"alt\", \"delete\");\r\n\r\n    var edit_img = document.createElement(\"IMG\");\r\n    edit_img.setAttribute('src','./img/edit.png');\r\n    edit_img.setAttribute(\"width\", \"50px\");\r\n    edit_img.setAttribute(\"height\", \"50px\");\r\n    edit_img.setAttribute(\"alt\", \"edit\");\r\n    \r\n\r\n    var Task_list = document.getElementById('Task-Container');\r\n    var div = document.createElement('div');\r\n    div.className = 'TodoItem';\r\n\r\n    var nameDiv = document.createElement('div');\r\n    nameDiv.className='Name';\r\n\r\n\r\n    var checkbox = document.createElement(\"INPUT\");\r\n    checkbox.setAttribute(\"type\", \"checkbox\");\r\n    checkbox.className='TaskCheck';\r\n\r\n    nameDiv.appendChild(checkbox)\r\n    nameDiv.appendChild(Task_name)\r\n    \r\n\r\n    var infoDiv = document.createElement('div');\r\n    infoDiv.className='Info';\r\n\r\n    var dateDiv = document.createElement('p')\r\n    dateDiv.className='date';\r\n    var date = document.createTextNode(document.getElementById('birthday').value)\r\n    dateDiv.appendChild(date);\r\n\r\n    var piorDiv = document.createElement('p');\r\n    piorDiv.className='priority';\r\n    var pior = document.createTextNode(document.getElementById('priority').value)\r\n    piorDiv.appendChild(pior);\r\n\r\n    infoDiv.appendChild(dateDiv);\r\n    infoDiv.appendChild(piorDiv);\r\n    infoDiv.appendChild(edit_img);\r\n    infoDiv.appendChild(del_img);\r\n    \r\n\r\n    div.appendChild(nameDiv);\r\n    div.appendChild(infoDiv);\r\n\r\n    Task_list.appendChild(div)\r\n}\r\nwindow.createFolder= createFolder;\r\nwindow.createTask= createTask;\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
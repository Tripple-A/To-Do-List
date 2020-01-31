import './style.css';
import {
  Project, List, Move, createTodo,
} from './logic';

const mylist = [];
const addProject = document.getElementById('add-project');
const projectList = document.querySelector('.project-list');
const newProj = document.querySelector('.add-proj');
const create = document.querySelector('.create');
const input = document.querySelector('.new-project');
const cancel = document.querySelector('.cancel');
const col2 = document.querySelector('.col2');
const col3 = document.querySelector('.col3');
const col4 = document.querySelector('.col4');
const cola = document.querySelector('.cola');
const colb = document.querySelector('.colb');
const colc = document.querySelector('.colc');
const removeForm = document.querySelector('.remove-form');
const addForm = document.querySelector('.todo-form');
const { todoForm } = document.forms;

const appendLists = (item) => {
  const p4 = document.createElement('p');
  p4.textContent = item.name;
  p4.classList.add('grids');
  p4.classList.add('bolden');
  col4.appendChild(p4);
  item.list.forEach((listed) => {
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.classList.add('grids');
    p2.classList.add('grids');
    p3.classList.add('grids');
    p1.textContent = listed.title;
    p2.textContent = listed.dueDate;
    p3.textContent = listed.priority;
    cola.appendChild(p1);
    colb.appendChild(p2);
    colc.appendChild(p3);
  });
};

const emptyGrid = () => {
  document.querySelectorAll('.grids').forEach((grid) => grid.parentNode.removeChild(grid));
};

const clearForm = () => {
  todoForm.title.value = '';
  todoForm.description.value = '';
  todoForm.date.value = '';
  todoForm.priority.value = '';
};

const clearList = () => {
  document.querySelectorAll('.dispensable').forEach((grid) => grid.parentNode.removeChild(grid));
};

const appendTodo = (item) => {
  document.querySelectorAll('.do-without').forEach((grid) => grid.parentNode.removeChild(grid));
  const addTodo = document.createElement('button');
  addTodo.classList.add('do-without');
  addTodo.textContent = 'ADD TODO';
  addForm.appendChild(addTodo);
  addTodo.addEventListener('click', () => {
    const newtodo = createTodo();
    Move(newtodo, item.list);
    emptyGrid();
    appendLists(item);
    clearForm();
    document.querySelector('.todo-form').classList.add('no-display');
  });
};

const delItem = (btn) => {
  btn.addEventListener('click', () => {
    const num = parseInt(btn.id, 10);
    mylist.splice(num, 1);
    showList();
    col2.classList.add('no-display');
  });
};

const showtodos = (a, item, index) => {
  a.addEventListener('click', () => {
    document.querySelectorAll('.gridder').forEach((grid) => grid.parentNode.removeChild(grid));
    document.querySelector('.todo-form').classList.add('no-display');
    emptyGrid();
    appendLists(item);
    col2.classList.remove('no-display');
    const addButton = document.createElement('button');
    const delButton = document.createElement('button');
    delButton.textContent = 'DELETE PROJECT';
    delButton.classList.add('gridder');
    delButton.id = index;
    delItem(delButton);
    col3.appendChild(delButton);
    col3.appendChild(addButton);
    addButton.textContent = 'ADD TODO';
    addButton.classList.add('gridder');
    addButton.classList.add('btn-primary');
    addButton.addEventListener('click', () => {
      document.querySelector('.todo-form').classList.remove('no-display');
      appendTodo(item);
    });
  });
};


const showList = () => {
  clearList();
  mylist.forEach((item, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    showtodos(a, item, index);
    a.textContent = item.name;
    a.href = '#';
    li.classList.add('dispensable');
    li.appendChild(a);
    projectList.appendChild(li);
  });
};


function newProject() {
  cancel.addEventListener('click', () => {
    input.value = '';
    newProj.classList.add('no-display');
  });

  create.addEventListener('click', () => {
    const newAdded = Project(input.value, []);
    Move(newAdded, mylist);
    newProj.classList.add('no-display');
    input.value = '';
    showList();
  });

  addProject.addEventListener('click', () => {
    newProj.classList.remove('no-display');
  });

  removeForm.addEventListener('click', () => {
    document.querySelector('.todo-form').classList.add('no-display');
  });
}


const p = Project('My first Project', []);
const t = List('hey', 'description', '23-45-67', 'low');
Move(t, p.list);
Move(p, mylist);
showList();
newProject();

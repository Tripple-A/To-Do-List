import './style.css';
import {
  Project, Move, createTodo, saveForm, edit,
} from './logic';

let mylist;
const addProject = document.getElementById('add-project');
const projectList = document.querySelector('.project-list');
const newProj = document.querySelector('.add-proj');
const create = document.querySelector('.create');
const input = document.querySelector('.new-project');
const cancel = document.querySelector('.cancel');
const col2 = document.querySelector('.col2');
const col3 = document.querySelector('.col3');
const col4 = document.querySelector('.col4');
const removeForm = document.querySelector('.remove-form');
const addForm = document.querySelector('.todo-form');
const check = document.querySelector('.check');
const { todoForm } = document.forms;

const store = () => {
  localStorage.setItem('savedData', JSON.stringify(mylist));
};

const checkName = () => {
  if (input.value === '') {
    document.querySelector('.name').classList.remove('no-display');
  } else {
    return true;
  }
  return false;
};

const checkForm = () => {
  const title = todoForm.title.value;
  const description = todoForm.description.value;
  const dueDate = todoForm.date.value;
  const priority = todoForm.priority.value;
  if (title === '' || description === '' || dueDate === '' || priority === '') {
    document.querySelector('.form').classList.remove('no-display');
  } else {
    return true;
  }
  return false;
};

const classList = (btn) => {
  btn.classList.add('btn');
  btn.classList.add('btn-primary');
};

const showDetails = (a, p5) => {
  a.addEventListener('click', () => {
    p5.classList.remove('no-display');
  });
};

const emptyGrid = () => {
  document.querySelectorAll('.grids').forEach((grid) => grid.parentNode.removeChild(grid));
};

const editForm = (btn, listed) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.do-without').forEach((grid) => grid.parentNode.removeChild(grid));
    addForm.classList.remove('no-display');
    edit(listed);
    const editTodo = document.createElement('button');
    editTodo.textContent = 'SAVE';
    editTodo.classList.add('do-without');
    classList(editTodo);
    addForm.appendChild(editTodo);
    editTodo.addEventListener('click', () => {
      document.querySelector('.do-without').classList.add('no-display');
      saveForm(listed);
      store();
      addForm.classList.add('no-display');
      col2.classList.add('no-display');
    });
  });
};

const viewDetails = (p, item, list, index) => {
  const div1 = document.createElement('div');
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');
  classList(btn1);
  classList(btn2);
  editForm(btn1, list);
  btn1.textContent = 'EDIT TODO';
  btn2.textContent = 'DELETE TODO';
  div1.innerHTML = 'Description:';
  div1.innerHTML += list.description;
  btn2.addEventListener('click', () => {
    item.list.splice(index, 1);
    store();
    col2.classList.add('no-display');
  });
  p.appendChild(div1);
  p.appendChild(btn1);
  p.appendChild(btn2);
};

const appendLists = (item) => {
  const p4 = document.createElement('p');
  p4.textContent = item.name;
  p4.classList.add('grids');
  p4.classList.add('bolden');
  col4.appendChild(p4);
  item.list.forEach((listed, index) => {
    const p1 = document.createElement('a');
    const p2 = document.createElement('div');
    const p3 = document.createElement('div');
    const p5 = document.createElement('div');
    showDetails(p1, p5);
    p1.href = '#';
    p5.classList.add(index);
    p1.classList.add('grids');
    p2.classList.add('grids');
    p3.classList.add('grids');
    p1.classList.add('col-sm-4');
    p2.classList.add('col-sm-4');
    p3.classList.add('col-sm-4');
    p1.textContent = listed.title;
    p2.textContent = listed.dueDate;
    p3.textContent = listed.priority;
    p5.classList.add('grids');
    p5.classList.add('col-sm-12');
    viewDetails(p5, item, listed, index);
    p5.classList.add('no-display');
    check.appendChild(p1);
    check.appendChild(p2);
    check.appendChild(p3);
    check.appendChild(p5);
  });
};


const clearForm = () => {
  todoForm.title.value = '';
  todoForm.description.value = '';
  todoForm.date.value = '';
};

const clearList = () => {
  document.querySelectorAll('.dispensable').forEach((grid) => grid.parentNode.removeChild(grid));
};

const appendTodo = (item) => {
  document.querySelectorAll('.do-without').forEach((grid) => grid.parentNode.removeChild(grid));
  const addTodo = document.createElement('button');
  classList(addTodo);
  addTodo.classList.add('do-without');
  addTodo.textContent = 'CREATE TODO';
  addForm.appendChild(addTodo);
  addTodo.addEventListener('click', () => {
    if (checkForm()) {
      const newtodo = createTodo();
      Move(newtodo, item.list);
      store();
      emptyGrid();
      appendLists(item);
      clearForm();
      document.querySelector('.todo-form').classList.add('no-display');
      document.querySelector('.red').classList.add('no-display');
    }
  });
};

const delItem = (btn) => {
  btn.addEventListener('click', () => {
    const num = parseInt(btn.id, 10);
    mylist.splice(num, 1);
    store();
    col2.classList.add('no-display');
  });
};


const showtodos = (a, item, index) => {
  const addButton = document.createElement('button');
  const delButton = document.createElement('button');
  a.addEventListener('click', () => {
    document.querySelectorAll('.gridder').forEach((grid) => grid.parentNode.removeChild(grid));
    document.querySelector('.todo-form').classList.add('no-display');
    emptyGrid();
    appendLists(item);
    col2.classList.remove('no-display');
    delButton.textContent = 'DELETE PROJECT';
    delButton.classList.add('gridder');
    delButton.id = index;
    col3.appendChild(delButton);
    col3.appendChild(addButton);
    addButton.textContent = 'ADD TODO';
    addButton.classList.add('gridder');
    classList(addButton);
    classList(delButton);
    addButton.addEventListener('click', () => {
      clearForm();
      document.querySelector('.todo-form').classList.remove('no-display');
      appendTodo(item);
    });
  });
  return delButton;
};


const showList = () => {
  clearList();
  mylist.forEach((item, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const del = showtodos(a, item, index);
    delItem(del);
    del.onclick = showList;
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
    if (checkName()) {
      const newAdded = Project(input.value, []);
      Move(newAdded, mylist);
      store();
      newProj.classList.add('no-display');
      input.value = '';
      showList();
      document.querySelector('.name').classList.add('no-display');
    }
  });

  addProject.addEventListener('click', () => {
    newProj.classList.remove('no-display');
  });

  removeForm.addEventListener('click', () => {
    document.querySelector('.todo-form').classList.add('no-display');
  });
}


const previous = () => {
  if (localStorage.savedData === 'undefined' || localStorage.savedData.length <= 2) {
    mylist = [];
    const p = Project('My first Project', []);
    Move(p, mylist);
    store();
  } else {
    mylist = JSON.parse(localStorage.getItem('savedData'));
  }
};
previous();
showList();
newProject();

import './style.css';
import {
  Project, List, Move, Itemize, 
} from './logic';

const mylist = [];
const addProject = document.getElementById('add-project');
const projectList = document.querySelector('.project-list');
const newProj = document.querySelector('.add-proj');
const create = document.querySelector('.create');
const input = document.querySelector('.new-project');
const cancel = document.querySelector('.cancel');

const showList = () => {
  mylist.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.name;
    a.href = '#';
    li.appendChild(a);
    projectList.appendChild(li);
  });
};

function newProject() {
  create.addEventListener('click', () => {
    const newAdded = Project(input.value, []);
    Move(newAdded, mylist);
    newProj.classList.add('no-display');
    showList();
  });

  addProject.addEventListener('click', () => {
    newProj.classList.remove('no-display');
  });
}


const p = Project('My first Project', []);
Move(p, mylist);
showList();
newProject();
console.log(mylist);

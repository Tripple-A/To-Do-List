import './style.css';
import { Project, List } from './logic';


const p = Project('My first Project', []);
document.querySelector('h1').textContent = p.name;

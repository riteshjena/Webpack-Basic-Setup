import style from './style.scss'

const root = document.createElement('div');
root.innerHTML = `<p>Hello Learning Enthusiast.</p>`;
document.body.appendChild(root);

const button = document.createElement('button');
button.textContent = 'Load Dynamic Module';
document.body.appendChild(button);

button.onclick = () => {
  import('./dynamic').then(dynamic => {
    dynamic.init();
  })
}

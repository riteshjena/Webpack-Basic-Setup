import style from './style.scss'

const root = document.createElement("div");
root.innerHTML = `<p>Hello Learning Enthusiast!</p>`;
document.body.appendChild(root);

const button = document.createElement("button")
button.textContent = 'Open chat'
document.body.appendChild(button)

button.onclick = () => {
  import("./chat").then(chat => {
    chat.init();
  })
}

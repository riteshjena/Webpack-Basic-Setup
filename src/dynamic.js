export function init() {
  const root = document.createElement('div');
  root.innerHTML = `<p>This is a dynamically imported module.</p>`;
  document.body.appendChild(root);
}

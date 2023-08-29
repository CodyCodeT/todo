export default function sidebarInterface(projectListArray) {
  const sidebar = document.querySelector("#sidebar");
  for (let i = 0; i < projectListArray.length; i++) {
    const element = document.createElement("button");
    element.textContent = `${projectListArray[i].name}`;
    element.classList = "sidebarelement";
    sidebar.appendChild(element);
  }
}

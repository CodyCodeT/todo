export default function descriptionView(projectListArray, iIndex, jIndex) {
    const formContainer = document.querySelector('#formcontainer')
    formContainer.style.display = 'flex'
    const div = document.createElement('div')
    const description = document.createElement('p')
    description.textContent = `${projectListArray[iIndex].todos[jIndex].description}`
    formContainer.appendChild(description);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            formContainer.innerHTML = ''
            formContainer.style.display = 'none'
        }
    })
}
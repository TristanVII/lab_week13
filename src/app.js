// clone div to copy container

const copy = document.querySelector('.copy-container')
const container = document.querySelectorAll('.original-container div')

function addDiv(evt) {
  copy.insertAdjacentHTML("afterbegin", evt)
}

container.forEach(element => element.addEventListener('click', (evt) => {
    addDiv(evt.currentTarget.outerHTML)
}))

// delete copy container content

const btn = document.querySelector('button')

function delContainer(){
    while (copy.firstChild) {
        copy.removeChild(copy.firstChild);
      }
}

btn.addEventListener('click', delContainer)


// clone div to copy container

const copy = document.querySelector('.copy-container')
const container = document.querySelectorAll('.original-container div')

function addDiv(evt) {
  copy.insertAdjacentHTML("afterbegin", evt.currentTarget.outerHTML)
}

container.forEach(element => element.addEventListener('click', addDiv))

// delete copy container content

const btn = document.querySelector('button')

function delContainer(){
    while (copy.firstChild) {
        copy.removeChild(copy.firstChild);
      }
}

btn.addEventListener('click', delContainer)


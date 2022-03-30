// clone div

const copy = document.querySelector('.copy-container')
const container = document.querySelectorAll('.original-container div')

function addDiv(evt) {
  copy.insertAdjacentHTML("afterbegin", evt)
}

container.forEach(element => element.addEventListener('click', (evt) => {
    addDiv(evt.currentTarget.outerHTML)
}))

// 


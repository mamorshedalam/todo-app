/* ========== ASSIGN VARIABLES ========== */
const incompleteList = document.getElementById("incomplete-list")
const completeList = document.getElementById("complete-list")
const openInputDiv = document.getElementById("open-input-div")
const inputDiv = document.getElementById("input-div")
const form = document.getElementById("input-form")
const titleInput = document.getElementById("todo-title")
const timeInput = document.getElementById("todo-time")
const showAllBtn = document.getElementById("show-all")
const showTodayBtn = document.getElementById("show-today")
const incompleteBtn = document.getElementById("incomplete-btn")
const completeBtn = document.getElementById("complete-btn")
const openInputBtn = document.getElementById("add-btn")
const closeInputBtn = document.getElementById("close-btn")

/* ========== EVENTS ========== */
showAllBtn.onclick = function () { activeClass(showAllBtn, showTodayBtn) }
showTodayBtn.onclick = function () { activeClass(showTodayBtn, showAllBtn) }

completeBtn.addEventListener('click', function () {
     displayToggle(completeList, incompleteList)
     activeClass(completeBtn, incompleteBtn)
})
incompleteBtn.addEventListener('click', function () {
     displayToggle(incompleteList, completeList)
     activeClass(incompleteBtn, completeBtn)
})

openInputBtn.addEventListener('click', function () {
     displayToggle(inputDiv, openInputDiv)
})
closeInputBtn.addEventListener('click', function () {
     displayToggle(openInputDiv, inputDiv)
     document.querySelector("form p").remove()
});

function complete(btn) {
     const item = btn.parentElement
     const title = item.querySelector('p').innerText
     const time = item.querySelector('span').innerText

     createCompleteTask(title, time)
     item.remove()
}
function remove(btn) { btn.parentElement.remove() }

form.addEventListener('submit', function (event) {
     event.preventDefault()

     const newItem = createTask(titleInput.value, timeInput.value)
     incompleteList.appendChild(newItem)

     // clear input fields
     titleInput.value = ""
     timeInput.value = ""

     // success message show
     const message = feedback()
     form.appendChild(message)
})

/* ========== FUNCTIONS ========== */

// DISPLAY TOGGLE
const displayToggle = (show, hide) => {
     show.style.display = 'block'
     hide.style.display = 'none'
}
// ACTIVE BUTTON STYLE
const activeClass = (add, remove) => {
     remove.classList.remove('active-btn')
     add.classList.add('active-btn')
}
// CREATE INCOMPLETE ITEM
const createTask = (title, time) => {
     const createItem = document.createElement('li')
     createItem.className = 'item'
     createItem.innerHTML = `<button class="complete-icon">&check;</button> <p>${title}</p> <span>${time}</span>`
     return createItem
}
// FEEDBACK OF SUBMIT
const feedback = () => {
     const feedback = document.createElement('p')
     feedback.innerText = "Your Test has been added"
     return feedback
}
// CREATE COMPLETE ITEM
const createCompleteTask = (title, time) => {
     const createItem = document.createElement('li')
     createItem.className = 'item'
     createItem.innerHTML = `<p>${title}</p> <span>${time}</span> <button class="complete-icon" onclick="remove(this)">&Cross;</button>`

     completeList.appendChild(createItem)
}
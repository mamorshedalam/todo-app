/* ========== ASSIGN VARIABLES ========== */
const incompleteList = document.querySelector('.incomplete-list');
const completeList = document.querySelector('.complete-list');
const form = document.querySelector('form');

/* ========== FUNCTIONS ========== */
// DISPLAY TOGGLE
function displayToggle(show, hide) {
     const showDiv = document.querySelector(show);
     const hideDiv = document.querySelector(hide);

     showDiv.style.display = "block";
     hideDiv.style.display = "none";
}
// ACTIVE BUTTON STYLE
function activeClass(remove, add) {
     const removeClass = document.querySelector(remove);
     removeClass.classList.remove("active-btn");

     const addClass = document.querySelector(add);
     addClass.classList.add("active-btn");

}
// ADD TASK
function addTask(event) {
     event.preventDefault();
     let title = document.querySelector('#todo-title');
     let time = document.querySelector('#todo-time');
     // create an item on incomplete list
     createIncompleteItem(title.value, time.value);

     // clear input fields
     title.value = "";
     time.value = "";

     // success message show
     const feedback = document.createElement('p');
     feedback.innerText = "Your Test has been added";
     form.appendChild(feedback);
}
// CREATE INCOMPLETE ITEM
const createIncompleteItem = function (title, time) {
     const listItem = document.createElement('li');
     listItem.classList.add("item");
     listItem.innerHTML = `<button class="complete-icon" onclick="incompleteArray(this)">&check;</button>
                         <p>${title}</p><span>${time}</span>`;
     incompleteList.appendChild(listItem);
}
// CREATE COMPLETE ITEM
function createComplete(title, time) {
     const listItem = document.createElement('li');
     listItem.innerHTML = `<p>${title}</p><span>${time}</span>
                         <button class="complete-icon" onclick="deleteItem(this)">&Cross;</button>`;

     completeList.appendChild(listItem);
}
// BIND CREATE COMPLETE ON INCOMPLETE BUTTON
const incompleteArray = function (btn) {
     const item = btn.parentNode;

     const title = item.querySelector('p').innerText;
     const time = item.querySelector('span').innerText;

     // create an item on complete list
     createComplete(title, time)

     item.remove();
}
// DELETE COMPLETE ITEM
function deleteItem(btn) {
     const item = btn.parentNode;
     item.remove();
}

/* ========== EVENTS ========== */
// SUBMIT FORM
form.addEventListener('submit', addTask);
// REMOVE SUCCESS TEXT
const removeBtn = document.querySelector(".add-item .complete-icon");
removeBtn.addEventListener('click', () => { document.querySelector("form p").remove() });
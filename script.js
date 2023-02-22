// Pop-up Modal for Popular Recipes on Home Page.
// Thank you to code pen for the code along.
const modals = document.querySelectorAll('[data-modal]');

modals.forEach(function (trigger) {
  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('open');
    const exits = modal.querySelectorAll('.modal-exit');
    exits.forEach(function (exit) {
      exit.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.remove('open');
      });
    });
  });
});

// Blog Comment Section
// Variables
const formElement = document.querySelector('form');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#email');
const userWeb = document.querySelector('#website');
const userComment = document.querySelector('#comments');
const userPost = document.querySelector('#userComments');

formElement.addEventListener('submit', function(event){
    event.preventDefault();

    const posterName = userName.value.trim();
    const posterEmail = userEmail.value.trim();
    const posterWeb = userWeb.value.trim();
    const posterComment = userComment.value.trim();
    
    if (posterName && posterEmail){

        // get today's Date
        let today = new Date();
        today = today.toString();
        // console.log(today);

        // Cut the day
        let day = today.slice(8, 10);
        // Cut the Month
        let month = today.slice(4, 7);
        // Cut the year
        let year = today.slice(11, 15);
        // Cut the hour
        let hour = today.slice(16, 24);

        const postedComment = document.createElement('div');

        postedComment.innerHTML = `<div class=userCommentBox><h4>${posterName} - ${posterWeb}</h4>
        <p>${posterEmail}</p>
        <p>${posterComment}</p>
        <p class="postDate">${month} ${day}, ${year} at ${hour}</p>
        </ul>`;

        userPost.appendChild(postedComment);

        userName.value = '';
        userEmail.value = '';
        userWeb.value = '';
        userComment.value ='';

    }
})
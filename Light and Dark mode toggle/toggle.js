const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const indicator = document.getElementById('indicator');

toggle.onclick = function() {
    toggle.classList.toggle('active');
    toggle.classList.toggle('light');
    body.classList.toggle('light');
    indicator.classList.toggle('light');
}
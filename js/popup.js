var button = document.getElementById('toggle');
console.log(button.className);
button.addEventListener('click', toggle);

function toggle() {
  if (button.className == 'toggleButton') {
    button.className += ' activeToggle';
  } else if (button.className == 'toggleButton activeToggle') {
    button.classList.remove('activeToggle');
  }
}
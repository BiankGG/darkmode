
const toggleSwitch = document.getElementById('toggle');
const wrapToggle = document.querySelector('.wrap-toggle');


toggleSwitch.addEventListener('change', function() {
 
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-mode');
    wrapToggle.classList.add('switch-active');
    
  } else {
   
    document.body.classList.remove('dark-mode');
    wrapToggle.classList.remove('switch-active');
  }
});
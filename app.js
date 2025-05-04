

const toggleBtn = document.getElementById('toggle-btn');
const navMenu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('is-active');  
  navMenu.classList.toggle('active');        
});


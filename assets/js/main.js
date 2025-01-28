

document.addEventListener('DOMContentLoaded', () => {
  let cjSite = new Site();
})

class Site {

  constructor(){
    this.setTheme();
    this.addEvents();
  }

  handleEvent(e){
    if (e.type=='click'){
      switch(e.currentTarget.id){
        case 'main-menu':
          let targetId = e.target.dataset.target;
          if (!targetId) break; 
          let source = document.getElementById(e.currentTarget.id);
          let target = document.getElementById(targetId);
          if (!target) break;
          source.classList.toggle('is-active');
          target.classList.toggle('is-active');
          break;
        case 'themes':
          let themes = document.getElementById(e.currentTarget.id);
          themes.parentNode.classList.toggle('is-active');
          break;
        case 'light-theme':
          document.getElementById('themes').innerHTML = '<i class="fas fa-sun">'
          document.getElementById('themes').parentNode.classList.toggle('is-active');
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          break;
        case 'dark-theme':
          document.getElementById('themes').innerHTML = '<i class="fas fa-moon">'
          document.getElementById('themes').parentNode.classList.toggle('is-active');
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
          break;
        case 'system-theme':
          document.getElementById('themes').innerHTML = '<i class="fas fa-desktop">'
          document.getElementById('themes').parentNode.classList.toggle('is-active');
          document.documentElement.removeAttribute('data-theme');
          localStorage.removeItem('theme');
          break;    

      }
    }
  }

  addEvents() {
    let navbarBurgers = document.querySelectorAll('.navbar-burger');
    if (!navbarBurgers) return;
    navbarBurgers.forEach(el => {
      el.addEventListener('click', this)
    });
    let themes = document.querySelector('#themes');
    themes.addEventListener('click', this)
    let lightTheme = document.querySelector('#light-theme');
    lightTheme.addEventListener('click', this)
    let darkTheme = document.querySelector('#dark-theme');
    darkTheme.addEventListener('click', this)
    let systemTheme = document.querySelector('#system-theme');
    systemTheme.addEventListener('click', this)
  }

  setTheme(){
    let theme = localStorage.getItem('theme');
    if (theme==='dark'){
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById('themes').innerHTML = '<i class="fas fa-moon">'
    }else if (theme==='light'){
      document.documentElement.setAttribute('data-theme', 'light');
      document.getElementById('themes').innerHTML = '<i class="fas fa-sun">'
    }
  }

}
document.addEventListener('DOMContentLoaded', () => {
  let bjApp = new App();
})

class App {

  cookieConsent = {
        cookie: {
        name: 'cc_cj',
          },
           guiOptions: {
          consentModal: {
              layout: 'box wide',
              position: 'bottom right',
              equalWeightButtons: false
          },
          preferencesModal: {
              layout: 'bar',
              position: 'left',
          }
      },
        categories: {
            necessary: {
                enabled: true,  
                readOnly: true
            },
            performance: {
              enabled: true
            },
            functional: {
              enabled: true
            },
            targeting: {
              enabled: true
            }
        },

        language: {
            default: 'en',
            translations: {
                en: {
                    consentModal: {
                        title: 'We use cookies',
                        description: 'This website uses cookies and similar technologies to ensure functionality, evaluate website usage, and to serve marketing content.',
                        showPreferencesBtn: 'Cookie Preferences',
                        acceptAllBtn: 'Accept all',
                        acceptNecessaryBtn: 'Reject all'
                    },
                    preferencesModal: {
                        title: 'Cookie preferences',
                        savePreferencesBtn: 'Accept current selection',
                        closeIconLabel: 'Close modal',
                        sections: [
                            {
                                title: 'Privacy Preference',
                                description: 'When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.'
                            },
                            {
                                title: 'Strictly Necessary Cookies',
                                description: 'These cookies are necessary for the website to function. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.',
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Performance Cookies',
                                description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us understand how visitors move around the site and which pages are most frequently visited.',
                                linkedCategory: 'performance'
                            },
                            {
                                title: 'Functional Cookies',
                                description: 'These cookies are used to record your choices and settings, maintain your preferences over time and recognize you when you return to our website. These cookies help us to personalize our content for you and remember your preferences.',
                                linkedCategory: 'functional'
                            },
                            {
                                title: 'Targeting Cookies',
                                description: 'These cookies are deployed to our site by our advertising partners to build a profile of your interests and provide you with content that is relevant to you, including to show you relevant ads on other sites.',
                                linkedCategory: 'targeting'
                            }
                        ]
                    }
                }
            }
        }
    }
  
  constructor(){
    this.setTheme();
    this.addEvents();
    this.setupSliders();
    this.detectMenuActive();    
    this.whithAnimations();
    CookieConsent.run(this.cookieConsent);
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
          document.documentElement.classList.add('cc--darkmode');
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
      document.getElementById('themes').innerHTML = '<i class="fas fa-moon">';
      document.getElementById('dark-theme').classList.add('is-active');
      document.documentElement.classList.add('cc--darkmode');
    }else if (theme==='light'){
      document.documentElement.setAttribute('data-theme', 'light');
      document.getElementById('themes').innerHTML = '<i class="fas fa-sun">';
      document.getElementById('light-theme').classList.add('is-active');
    }else {
      document.documentElement.removeAttribute('data-theme');
      document.getElementById('themes').innerHTML = '<i class="fas fa-desktop">';
      document.getElementById('system-theme').classList.add('is-active');
    }
  }

  setupSliders(){
    let sliders = document.querySelectorAll('.swiper');
    sliders.forEach(slider=>{
      let config = {};
      if (slider.hasAttribute('pagination')){
        config.pagination = {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }
      }
      switch(slider.dataset.effect){
        case 'coverflow':
          config.grabCursor = true;
          config.centeredSlides = true;
          config.slidesPerView = 'auto';
          config.effect = 'coverflow';
          config.coverflowEffect = {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }
          break;
      };
      if ( slider.dataset.autoplay ){
        config.autoplay = {
          delay: slider.dataset.autoplay,
          disableOnInteraction: false
        }
      }
      var swiper = new Swiper(`#${slider.id}`,config);
    });
  }


  detectMenuActive(){
    const currentPath = window.location.pathname;
    if (currentPath.includes('/usage-guide') || currentPath.includes('/documentation')) {
      let menuLinks = document.querySelectorAll('.is-lateral-link');
      menuLinks.forEach(link => {
        let linkPath = link.getAttribute('href');
        if (currentPath === linkPath) {
          link.classList.add('is-active');
      }
      })
      let crums = currentPath.split('/').filter(part => part !== '');
      let crumHref = '/';
      let breadcrum = document.querySelector('.breadcrumb-items');
      for (let i = 0; i < crums.length; i++) {
        let crum = document.createElement('li');
        let crumLink = document.createElement('a');
        crumHref += crums[i] + '/';
        crumLink.href = crumHref;   
        if (i<crums.length-1){
          let unslug = crums[i].replace(/-/g, ' ');
          crumLink.textContent = unslug.charAt(0).toUpperCase() + unslug.slice(1).toLowerCase();
        }else{
          crumLink.textContent = document.title;
          crum.classList.add('is-active');
        }
        crum.appendChild(crumLink);
        breadcrum.appendChild(crum);
      }

    }
  }

  whithAnimations(){
    let objs = document.querySelectorAll('[data-animation]')
    let options = { threshold: 0.1}   
    var observer = new IntersectionObserver(entries=>{
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setupAnimation(entry.target)
                return
            }
            entry.target.classList.forEach(_class => {
                if (_class.startsWith('animate__')){
                    entry.target.classList.remove(_class)
                }
            })
        })
    })
    objs.forEach(obj => {
        observer.observe(obj);
    })
}

}


function setupAnimation(el){
  el.classList.add("animate__animated", `animate__${el.getAttribute('data-animation')}`);
  if (el.hasAttribute('data-delay')){
      el.classList.add(`animate__delay-${el.getAttribute('data-delay')}`);
  }
  if (el.hasAttribute('data-speed')){
      el.classList.add(`animate__${el.getAttribute('data-speed')}`);
  }
  if (el.hasAttribute('data-repeat')){
      el.getAttribute('data-repeat') === "infinite"?el.classList.add("animate__infinite"):el.classList.add(`animate__repeat-${el.getAttribute('data-repeat')}`);
  }
}


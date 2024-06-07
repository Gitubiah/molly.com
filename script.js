/*show menu*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*search*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*login*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})

// dropdownmenu toggle
const navItems = document.querySelectorAll('.nav__item');

navItems.forEach((navItem) => {
  navItem.addEventListener('mouseover', () => {
    const megaDropdown = navItem.querySelector('.mega-dropdown');
    megaDropdown.style.display = 'block';
  });

  navItem.addEventListener('mouseout', () => {
    const megaDropdown = navItem.querySelector('.mega-dropdown');
    megaDropdown.style.display = 'none';
  });
});
// slider
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let products = item.querySelectorAll('.product-card');
  let productWidth = products[0].getBoundingClientRect().width;
  let productMargin = parseInt(getComputedStyle(products[0]).marginRight);

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += productWidth + productMargin;
  });

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= productWidth + productMargin;
  });
});

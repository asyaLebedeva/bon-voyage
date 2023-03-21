const slide = document.querySelectorAll('.slide');
const itemCount = slide.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  slide[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  slide[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  slide[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  slide[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);

document.querySelectorAll('.tabs-ol__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-ol__btn').forEach(function(btn) {
      btn.classList.remove('tabs-ol__btn--active')});
      e.currentTarget.classList.add('tabs-ol__btn--active');

      document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active')});

        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
      });
    });

    new Accordion('.accordion-list', {
      elementClass: 'accordion',
      panelClass: 'accordion-content',
      triggerClass: 'accordion-faq',
      activeClass: 'accordion-active'
    });

const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav')
const logo = document.querySelector('.header-img')
const navLink = document.querySelectorAll('.nav-link')

burger.addEventListener('click', function() {
  burger.classList.toggle('burger-active'),
  menu.classList.toggle('nav-active'),
  logo.classList.toggle('header-img-none');
})

  navLink.forEach(function(el) {
    el.addEventListener('click', function() {
      burger.classList.remove('burger-active')
      menu.classList.remove('nav-active')
      logo.classList.remove('header-img-none')
    })
  })

const searchBtn = document.querySelector('.btn-hd')  
const formField = document.querySelector('.hd-search') 
const searchField = document.querySelector('.btn-search')
const cancelBtn = document.querySelector('.cancel-btn') 
      
searchBtn.addEventListener('click', function() { 
  searchField.classList.add('btn-search-active')
  cancelBtn.classList.add('cancel-active')
  formField.reset()
})

cancelBtn.addEventListener('click', function() {
  cancelBtn.classList.remove('cancel-active')
  searchField.classList.remove('btn-search-active')
})
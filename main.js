//Nav bar changeing color on scroll

window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

//Freqently Asked Questions & Answers Toggeling Effect
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq)=> {
    faq.addEventListener('click', ()=> {
        faq.classList.toggle('open');
        
        //Change faq icon on click

        const faq_icon = faq.querySelector('.faq_icon i');
        if (faq_icon.className === 'uil uil-plus-circle') {
            faq_icon.className = 'uil uil-minus-circle';
        }else {
            faq_icon.className = 'uil uil-plus-circle';
        }
    });
});
//End

//Show menu hide menu on Tables
const menuBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const nav_menu = document.querySelector('.nav_menu');


menuBtn.addEventListener('click', ()=> {
    nav_menu.style.display = 'flex';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

const showNav =  ()=> {
    nav_menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
};
closeBtn.addEventListener('click', showNav);

window.addEventListener('resize', ()=>{
    //Getting width of widows 
    let windowWidth = document.documentElement.clientWidth;

    if (windowWidth > 1024) {
        closeBtn.style.display = 'none';
        menuBtn.style.display = 'none';
        nav_menu.style.display = 'flex';  
    } else {
        closeBtn.style.display = 'none';
        menuBtn.style.display = 'inline-block';
        nav_menu.style.display = 'none';
    }
});
//End





































/* function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
 */
 let search = document.querySelector('.search-box');
 let navbar = document.querySelector('.navbar');
 let menuIcon = document.querySelector('#menu-icon');
 let menuIconClose = document.querySelector('#nav-close');
 let searchboxClose = document.querySelector('search-box-close');
 let navClose = document.getElementById("nav-close")
 document.querySelector('#search-icon').addEventListener('click',function() {
     search.classList.toggle('active');
     navbar.classList.remove('active');
    
 })

 if(menuIcon){

     menuIcon.addEventListener('click',function(){
         navbar.classList.add('active');
         
         
         
        })
    }
    if(menuIconClose){
        
        menuIconClose.addEventListener('click',function(){
            navbar.classList.remove('active');
            
         
        
     })
 }
 /* Menu hidden */
if (navClose) {
    navClose.addEventListener("click", () => {
        menuIcon.classList.remove("active");
    });
  }

 window.addEventListener('scroll',function()  {
     navbar.classList.remove('active')
     search.classList.remove('active')
 })



 let header = document.querySelector('header');

 window.addEventListener('scroll' , () => {
     header.classList.toggle('shadow', window.scrollY > 0);
 });

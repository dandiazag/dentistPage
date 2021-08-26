let backdrop= document.querySelector('.backdrop');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let closeMenu=document.querySelector('.close-menu-3');

backdrop.addEventListener('click',()=>{
    mobileNav.style.display='none';
    closeBackdrop();
})

function closeBackdrop(){
    backdrop.style.display='none';
}

toggleButton.addEventListener('click',()=>{
mobileNav.style.display='block';
backdrop.style.display='block';
});

closeMenu.addEventListener('click',()=>{
    mobileNav.style.display='none';
    closeBackdrop();
})








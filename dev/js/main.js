const menuPrice = document.querySelector('.mapping-nav');
const submenuProduct = document.querySelector('.submenu--product');
const submenuBrand = document.querySelector('.submenu--brand');


menuPrice.addEventListener('click',(event)=>{
    let target = event.target;
    console.log(target.innerText);
    if(target.classList.contains("item--product")){

        submenuProduct.classList.add('submenu--active');
        submenuBrand.classList.remove('submenu--active');
    }else if(target.classList.contains("item--brand")){
        submenuBrand.classList.add('submenu--active');
        submenuProduct.classList.remove('submenu--active');
    }else{
        submenuProduct.classList.remove('submenu--active');
        submenuBrand.classList.remove('submenu--active');
    }

});

const HandleHamburger = document.querySelector(".hamburger");
const HandleMenu = document.querySelector(".menu");


HandleHamburger.onclick = function() {
    HandleHamburger.classList.toggle('activeHamburger');
    HandleMenu.classList.toggle('activeHamburger');

};
HandleMenu.onclick = function() {
    HandleMenu.classList.remove('activeHamburger');
    HandleHamburger.classList.remove('activeHamburger');

};
const menuSort = document.querySelector(".nav-mobile__img");
const shadowBody = document.querySelector(".shadow-block");
const navMapping = document.querySelector(".mapping-nav");
const body = document.querySelector(".body");
const btnClose = document.querySelector('.close-main__mapping');

menuSort.addEventListener('click',()=>{
    shadowBody.classList.add("shadow");
    navMapping.classList.add("shadow-active");
    body.classList.add("shadow-body");
    const shadow = document.querySelector(".shadow");
    const mappingBtn = document.querySelector(".mapping-price__btn");
    mappingBtn.addEventListener('click',()=>{
        shadowBody.classList.remove("shadow");
        navMapping.classList.remove("shadow-active");
        body.classList.remove("shadow-body")

    });
    shadow.addEventListener('click',()=>{
        shadowBody.classList.remove("shadow");
        navMapping.classList.remove("shadow-active");
        body.classList.remove("shadow-body")
    });
    btnClose.addEventListener('click',()=>{
        shadowBody.classList.remove("shadow");
        navMapping.classList.remove("shadow-active");
        body.classList.remove("shadow-body")
    });
});
const search = document.querySelector(".header-search__img");


search.addEventListener('click',()=>{
    console.log("klick");
    const formHeader = document.querySelector(".form-header");
    formHeader.classList.toggle("form-header-active");

    search.addEventListener('keypress',(e)=>{
        formHeader.classList.remove("form-header-active");

    })
});









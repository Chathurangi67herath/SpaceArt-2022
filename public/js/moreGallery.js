// more Galleray
var imgSld1 = document.querySelector('.img-div1');
var imgSld2 = document.querySelector('.img-div2');
var imgSld3 = document.querySelector('.img-div3');
var imgSld4 = document.querySelector('.img-div4');
var imgSld5 = document.querySelector('.img-div5');
var imgSld6 = document.querySelector('.img-div6');
var imgSld7 = document.querySelector('.img-div7');
var imgSld8 = document.querySelector('.img-div8');
var imgSld9 = document.querySelector('.img-div9');
var imgSld10 = document.querySelector('.img-div10');
var imgSld11 = document.querySelector('.img-div11');
var imgSld12 = document.querySelector('.img-div12');
var imgSld13 = document.querySelector('.img-div13');
var imgSld14 = document.querySelector('.img-div14');
var imgSld15 = document.querySelector('.img-div15');


function scrollAppear(){
    
    var img1Position = imgSld1.getBoundingClientRect().top;
    var img2Position = imgSld2.getBoundingClientRect().top;
    var img3Position = imgSld3.getBoundingClientRect().top;
    var img4Position = imgSld4.getBoundingClientRect().top;
    var img5Position = imgSld5.getBoundingClientRect().top;
    var img6Position = imgSld6.getBoundingClientRect().top;
    var img7Position = imgSld7.getBoundingClientRect().top;
    var img8Position = imgSld8.getBoundingClientRect().top;
    var img9Position = imgSld9.getBoundingClientRect().top;
    var img10Position = imgSld10.getBoundingClientRect().top;
    var img11Position = imgSld11.getBoundingClientRect().top;
    var img12Position = imgSld12.getBoundingClientRect().top;
    var img13Position = imgSld13.getBoundingClientRect().top;
    var img14Position = imgSld14.getBoundingClientRect().top;
    var img15Position = imgSld15.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 1.2 ;
    
    if(img1Position < screenPosition)
        imgSld1.classList.add('img-div-appear');
    if(img2Position < screenPosition)
        imgSld2.classList.add('img-div-appear');
    if(img3Position < screenPosition)
        imgSld3.classList.add('img-div-appear');
    if(img4Position < screenPosition)
        imgSld4.classList.add('img-div-appear');
    if(img5Position < screenPosition)
        imgSld5.classList.add('img-div-appear');
    if(img6Position < screenPosition)
        imgSld6.classList.add('img-div-appear');
    if(img7Position < screenPosition)
        imgSld7.classList.add('img-div-appear');
    if(img8Position < screenPosition)
        imgSld8.classList.add('img-div-appear');
    if(img9Position < screenPosition)
        imgSld9.classList.add('img-div-appear');
    if(img10Position < screenPosition)
        imgSld10.classList.add('img-div-appear');
    if(img11Position < screenPosition)
        imgSld11.classList.add('img-div-appear');
    if(img12Position < screenPosition)
        imgSld12.classList.add('img-div-appear');
    if(img13Position < screenPosition)
        imgSld13.classList.add('img-div-appear');
    if(img14Position < screenPosition)
        imgSld14.classList.add('img-div-appear');
    if(img15Position < screenPosition)
        imgSld15.classList.add('img-div-appear');


}

setInterval(scrollAppear,100);
let mainImg=document.querySelector('.img-div');

let img1=document.querySelector('#img1');
let img2=document.querySelector('#img2');
let img3=document.querySelector('#img3');
let img4=document.querySelector('#img4');

let brandSpan=document.querySelector('#b-span');
let tkSpan=document.querySelector('#tk-span');


img1.addEventListener('click', function () {
    mainImg.src= 'imge/f2.jpg';
    brandSpan.innerHTML='Artistic Stitch';
    tkSpan.innerHTML=' $42';
});
img2.addEventListener('click', function () {
    mainImg.src= 'imge/f4.jpg';
    brandSpan.innerHTML='Kickout Creation';
    tkSpan.innerHTML=' $37';
});
img3.addEventListener('click', function () {
    mainImg.src= 'imge/f5.jpg';
    brandSpan.innerHTML='D Front Creations';
    tkSpan.innerHTML=' $20';
});
img4.addEventListener('click', function () {
    mainImg.src= 'imge/f3.jpg';
    brandSpan.innerHTML='Purple Maven';
    tkSpan.innerHTML=' $51';
});


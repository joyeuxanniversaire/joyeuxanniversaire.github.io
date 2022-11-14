let circle = document.getElementById('circle');
let lordi = document.querySelector('a[id="lordi"]');
let lcar = document.querySelector('a[id="lcar"]');
let lphone = document.querySelector('a[id="lphone"]');
let mimg = document.getElementById('mimg');
let cimg = document.getElementById('cimg');
let pimg = document.getElementById('pimg');

const onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
  }

document.addEventListener('mousemove', onMouseMove);

lordi.addEventListener('mouseover', function() {
  mimg.classList = "img-event";
});

lcar.addEventListener('mouseover', function() {
  cimg.classList = "img-event";
});

lphone.addEventListener('mouseover', function() {
  pimg.classList = "img-event";
});

mimg.addEventListener('mouseover', () => {
  mimg.classList = "img-hover-event";
})

cimg.addEventListener('mouseover', () => {
  cimg.classList = "img-hover-event";
})

pimg.addEventListener('mouseover', () => {
  pimg.classList = "img-hover-event";
})

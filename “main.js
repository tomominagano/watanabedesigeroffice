window.addEventListener("scroll", function() {

  let scroll = window.pageYOffset;

  if (scroll > 4000) {
    document.body.style.backgroundColor = '#000000';
  } else if (scroll > 3000) {
    document.body.style.backgroundColor = 'rgb(235, 235, 235)';
  } else if (scroll > 2000) {
    document.body.style.backgroundColor = '#deba96';
  } else if (scroll > 1000) {
    document.body.style.backgroundColor = '#0056b9';
  } else {
    document.body.style.backgroundColor = '#a5bfde';
  }

});


function changeColor() {
  var timing = 1000; //　変化するタイミングを微調整する

  var scrollY = window.pageYOffset;
  var body = document.body;

  var trigger1 = document.getElementById('js-section-1');
  var trigger2 = document.getElementById('js-section-2');
  var trigger3 = document.getElementById('js-section-3');
  var trigger4 = document.getElementById('js-section-4');

  var trigger1Y = trigger1.getBoundingClientRect().top; // ウィンドウ上からの要素の位置
  var trigger2Y = trigger2.getBoundingClientRect().top;
  var trigger3Y = trigger3.getBoundingClientRect().top;
  var trigger4Y = trigger4.getBoundingClientRect().top;

  // 白背景の時はbodyの.bg-is-blackを削除
  // 黒背景の時はbodyに.bt-is-blackを付与
  if(trigger2Y - timing > 0 && 0 >= trigger1Y - timing) {
    body.classList.remove('bg-is-black');
  } else if(trigger4Y - timing > 0 && 0 >= trigger3Y - timing) {
    body.classList.remove('bg-is-black');
  } else {
    body.classList.add('bg-is-black');
  }
}

window.addEventListener('scroll', changeColor);


const targets = document.getElementsByClassName('fade');
for(let i = targets.length; i--;){
 let observer = new IntersectionObserver((entries, observer) => {
  for(let j = entries.length; j--;){
   if (entries[j].isIntersecting) {
    entries[j].target.classList.add('active');
   } else{
    entries[j].target.classList.remove('active');
   }
  }
 });
 observer.observe(targets[i]);
}
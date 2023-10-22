// Define variables
let btn_anim1 = document.getElementById("btn-anim-1");
let btn_anim2 = document.getElementById("btn-anim-2");
let btn_anim3 = document.getElementById("btn-anim-3");
let btn_anim4 = document.getElementById("btn-anim-4");
let btn_anim5 = document.getElementById("btn-anim-5");
let btn_anim6 = document.getElementById("btn-anim-6");
let btn_c_t = document.getElementById("btn-c-t-anim");
let btn_reset = document.getElementById("btn-reset");
let circle = document.getElementById("circle");
let anim = document.getElementById("anim");
let anim_text = document.getElementById("anim-text");

function changeColor(color_class, btn){
  if(!color_class.classList.toggle('c-r')){
    color_class.classList.add('c-b');
    btn.textContent = "To Red";
  }else{
    color_class.classList.remove('c-b');
    color_class.classList.add('c-r');
    btn.textContent = "To Blue";
  }
}

function animate(animation, testMessage){
  anim_text.textContent=testMessage;
  circle.className="dot c-r";
  btn_c_t.textContent="To Blue"
  if(anim.classList.length!=0){
    anim.className="";
    anim.offsetHeight;
  }
  anim.classList.add(animation);
}
// Events
btn_anim1.addEventListener('click',()=>{
  animate('anim-1',"Dot goes to the right (50%) of viewport 3 times");
});
btn_anim2.addEventListener('click',()=>{
  animate('anim-2',"Dot goes to the right (100%) of viewport once");
});
btn_anim3.addEventListener('click',()=>{
  animate('anim-3',"Dot goes to the left (50%) of the viewport once");
});
btn_anim4.addEventListener('click',()=>{
  animate('anim-4',"Dot goes to the left (-100%) of the viewport once");
});
btn_anim5.addEventListener('click',()=>{
  animate('anim-5',"Dot start at 50% of viewport and bounce right left once");
});
btn_anim6.addEventListener('click',()=>{
  animate('anim-6',"Dot start at 50% of viewport and bounce left right once");
});
btn_c_t.addEventListener('click',()=>{
  // Change background to green
  changeColor(circle,btn_c_t)
});
btn_reset.addEventListener('click',()=>{
  anim_text.textContent="";
  circle.className="";
  anim.className="";
  btn_c_t.textContent = "To Blue";
});



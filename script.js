
var setting=document.querySelector(".setting");
var btn=document.getElementById("btn");
var span=document.getElementById("a");
var left=document.getElementsByTagName("a");
function settingmenuetoggle(){
setting.classList.toggle("setting-height");

}
btn.onclick= function(){
    btn.classList.toggle("span-dark");
  span.classList.toggle("dark");
  document.body.classList.toggle("dark-them");

if(localStorage.getItem("them")=="light"){
    localStorage.setItem("them","dark");
}
else{
    localStorage.setItem("them","light");
}


}
if(localStorage.getItem("them")=="light"){
    btn.classList.remove("span-dark");
  span.classList.remove("dark");
  document.body.classList.remove("dark-them");
}
else if(localStorage.getItem("them")=="dark"){
    btn.classList.add("span-dark");
  span.classList.add("dark");
  document.body.classList.add("dark-them");
}
else{
  
  localStorage.setItem("them","light");
}


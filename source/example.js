window.onscroll = function(){
  var t = document.documentElement.scrollTop;
    if(t>200){
    a1.style.animationPlayState = "running";
    a2.style.animationPlayState = "running";
    a3.style.animationPlayState = "running";
    a4.style.animationPlayState = "running";
    field.style.animationPlayState = "running";
    }
    else if(t>6000){
    suspicion_substance1.style.animationPlayState = "running";
    suspicion_substance2.style.animationPlayState = "running";
    suspicion_substance3.style.animationPlayState = "running";
  }}

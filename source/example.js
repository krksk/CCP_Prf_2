window.onscroll = function(){
  var t = document.documentElement.scrollTop;
    if(t>200){
    a1.style.animationPlayState = "running";
    a2.style.animationPlayState = "running";
    a3.style.animationPlayState = "running";
    a4.style.animationPlayState = "running";
    field.style.animationPlayState = "running";
    }
    else if(t>7800){
    suspicion_substance1.style.animationPlayState = "running";
    suspicion_substance2.style.animationPlayState = "running";
    }
    else if(t>1000){
    dP_montage_headline.style.animationPlayState = "running";
    suspicion_substance2.style.animationPlayState = "running";
    }
    monitor.innerHTML = t + "px";
    }
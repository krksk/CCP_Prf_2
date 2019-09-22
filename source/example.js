window.onscroll = function(){
  var t = document.documentElement.scrollTop;
    if(t>600){
    title.style.animationPlayState = "running";
    a1.style.animationPlayState = "running";
    a2.style.animationPlayState = "running";
    a3.style.animationPlayState = "running";
    a4.style.animationPlayState = "running";
    field.style.animationPlayState = "running";
    }if(t>5000){
    dP_montage_headline.style.animationPlayState = "running";
    dP_headline_Picture.style.animationPlayState = "running";
    }if(t>7800){
    suspicion_substance1.style.animationPlayState = "running";
    suspicion_substance2.style.animationPlayState = "running";
    }if(t>10000){
    ending_headline.style.animationPlayState = "running";
    }
    monitor.innerHTML = t + "px";
    }

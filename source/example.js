window.onscroll = function(){
  var t = document.documentElement.scrollTop;
    if(t>600){
    title.style.animationPlayState = "running";
    a1.style.animationPlayState = "running";
    a2.style.animationPlayState = "running";
    a3.style.animationPlayState = "running";
    a4.style.animationPlayState = "running";
    field.style.animationPlayState = "running";
    }if(t>800){
    introduce.style.animationPlayState = "running";
    develop.style.animationPlayState = "paused";
    analysis.style.animationPlayState = "paused";
    doubt.style.animationPlayState = "paused";
    now.style.animationPlayState = "paused";
    }if(t>1900){
    introduce.style.animationPlayState = "paused";
    }if(t>4800){
    analysis.style.animationPlayState = "running";
    }if(t>8500){
    doubt.style.animationPlayState = "running";
    }if(t>10750){
    now.style.animationPlayState = "running";
    }if(t>5000){
    dP_montage_headline.style.animationPlayState = "running";
    dP_headline_Picture.style.animationPlayState = "running";
    }if(t>7800){
    suspicion_substance1.style.animationPlayState = "running";
    suspicion_substance2.style.animationPlayState = "running";
    }if(t>10000){
    ending_headline.style.animationPlayState = "running";
    endingPicture.style.animationPlayState = "running";
    }if(t>12200){
    ending_finale1.style.animationPlayState = "running";
    ending_finale2.style.animationPlayState = "running";
    }
    monitor.innerHTML = t + "px";
    }

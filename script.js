function toggle_text1(event) {
    var span1 = document.getElementsByClassName("plongée");
    var videos1 = document.getElementsByClassName("videos");
    for (i=0; i<span1.length;i++){
        span1[i].style.display ="none";
    }

    for (i=0; i<videos1.length;i++){
        videos1[i].style.display ="none";
    }

    var button = event.target.id.split('_')[1];
    var span2 = document.getElementById("span_"+button);
    span2.style.display = "inline";
    var videos2 = document.getElementById("videos_"+button);
    videos2.style.display = "inline";
}

/*

function toggle_text2(event2) {
  var span1 = document.getElementsByClassName("croisière");
  var videos1 = document.getElementsByClassName("videos2");
  for (i=0; i<span1.length;i++){
      span1[i].style.display ="none";
  }

  for (i=0; i<videos1.length;i++){
      videos1[i].style.display ="none";
  }

  var button = event2.target.id.split('_')[1];
  var span2 = document.getElementById("span2_"+button);
  span2.style.display = "inline";
  var videos2 = document.getElementById("videos2_"+button);
  videos2.style.display = "inline";
}



function toggle_text3(event3) {
  var span1 = document.getElementsByClassName("plongée");
  var videos1 = document.getElementsByClassName("videos");
  for (i=0; i<span1.length;i++){
      span1[i].style.display ="none";
  }

  for (i=0; i<videos1.length;i++){
      videos1[i].style.display ="none";
  }

  var button = event.target.id.split('_')[1];
  var span2 = document.getElementById("span_"+button);
  span2.style.display = "inline";
  var videos2 = document.getElementById("videos_"+button);
  videos2.style.display = "inline";
}

function toggle_text4(event4) {
  var span1 = document.getElementsByClassName("plongée");
  var videos1 = document.getElementsByClassName("videos");
  for (i=0; i<span1.length;i++){
      span1[i].style.display ="none";
  }

  for (i=0; i<videos1.length;i++){
      videos1[i].style.display ="none";
  }

  var button = event.target.id.split('_')[1];
  var span2 = document.getElementById("span_"+button);
  span2.style.display = "inline";
  var videos2 = document.getElementById("videos_"+button);
  videos2.style.display = "inline";
}

function toggle_text5(event5) {
  var span1 = document.getElementsByClassName("plongée");
  var videos1 = document.getElementsByClassName("videos");
  for (i=0; i<span1.length;i++){
      span1[i].style.display ="none";
  }

  for (i=0; i<videos1.length;i++){
      videos1[i].style.display ="none";
  }

  var button = event.target.id.split('_')[1];
  var span2 = document.getElementById("span_"+button);
  span2.style.display = "inline";
  var videos2 = document.getElementById("videos_"+button);
  videos2.style.display = "inline";
}

function toggle_text6(event6) {
  var span1 = document.getElementsByClassName("plongée");
  var videos1 = document.getElementsByClassName("videos");
  for (i=0; i<span1.length;i++){
      span1[i].style.display ="none";
  }

  for (i=0; i<videos1.length;i++){
      videos1[i].style.display ="none";
  }

  var button = event.target.id.split('_')[1];
  var span2 = document.getElementById("span_"+button);
  span2.style.display = "inline";
  var videos2 = document.getElementById("videos_"+button);
  videos2.style.display = "inline";
}

*/


/* ------------------------------------------------*/



/* 


function toggle_text1() {
    var span1 = document.getElementById("span_txt1");
    var span2 = document.getElementById("span_txt2");
    var span3 = document.getElementById("span_txt3");
    var span4 = document.getElementById("span_txt4");
    if(span1.style.display == "none") {
      span1.style.display = "inline";
    } else {
      span1.style.display = "none";
    }

    if(span2.style.display == "inline" || span3.style.display == "inline" || span4.style.display == "inline") {
        span2.style.display = "none"
        span3.style.display = "none"
        span4.style.display = "none";
    } else {
        span2.style.display = "none";
        span3.style.display = "none"
        span4.style.display = "none"
    }
  }

  function toggle_text2() {
    var span1 = document.getElementById("span_txt1");
    var span2 = document.getElementById("span_txt2");
    var span3 = document.getElementById("span_txt3");
    var span4 = document.getElementById("span_txt4");
    
    if(span2.style.display == "none") {
      span2.style.display = "inline";
    } else {
      span2.style.display = "none";
    }

    if(span1.style.display == "inline" || span3.style.display == "inline" || span4.style.display == "inline") {
        span1.style.display = "none"
        span3.style.display = "none"
        span4.style.display = "none";
    } else {
        span1.style.display = "none";
        span3.style.display = "none"
        span4.style.display = "none"
    }
  }

  function toggle_text3() {
    var span1 = document.getElementById("span_txt1");
    var span2 = document.getElementById("span_txt2");
    var span3 = document.getElementById("span_txt3");
    var span4 = document.getElementById("span_txt4");
    
    if(span3.style.display == "none") {
      span3.style.display = "inline";
    } else {
      span3.style.display = "none";
    }

    if(span1.style.display == "inline" || span2.style.display == "inline" || span4.style.display == "inline") {
        span1.style.display = "none"
        span2.style.display = "none"
        span4.style.display = "none";
    } else {
        span1.style.display = "none";
        span2.style.display = "none"
        span4.style.display = "none"
    }
  }

  function toggle_text4() {
    var span1 = document.getElementById("span_txt1");
    var span2 = document.getElementById("span_txt2");
    var span3 = document.getElementById("span_txt3");
    var span4 = document.getElementById("span_txt4");
    
    if(span4.style.display == "none") {
      span4.style.display = "inline";
    } else {
      span4.style.display = "none";
    }

    if(span1.style.display == "inline" || span2.style.display == "inline" || span3.style.display == "inline") {
        span1.style.display = "none"
        span2.style.display = "none"
        span3.style.display = "none";
    } else {
        span1.style.display = "none";
        span2.style.display = "none"
        span3.style.display = "none"
    }
  }
  
  */
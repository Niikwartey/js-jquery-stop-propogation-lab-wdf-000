$(document).ready(function() {

  lightActive();
  redLight();
  yellowLight();
  greenLight();
  
});

function lightActive(){
  $('.light').on('click', function(e){
    $(this).toggleClass("active");
    console.log("background purple")
  });
}

function redLight(){
  $(".redLight").click(function(e){
    e.stopPropagation();
    $(this).toggleClass("red");
  });
}


function yellowLight(){
  $(".yellowLight").on('click', function(e){
    e.stopPropagation();
    $(this).toggleClass("yellow");
  });
}

function greenLight(){
  $(".greenLight").on('click', function(e){
    e.stopPropagation();
    $(this).toggleClass("green");
  });
}


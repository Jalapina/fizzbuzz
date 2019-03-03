$(document).ready(function(){
    jQuery.fn.reverse = [].reverse;
    var divs = document.getElementsByClassName("fizzbuzz");
    var delay = 0;

    $('.title').click(function(){
        $( divs ).reverse().each(function( index ){
            $(this).delay(delay).animate({
                opacity: 0,
                rotate: 360,
            },{
                duration: 500,
                step: function(now) {
                  $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }
              },500);
            delay += 500;
        });
    });

    for(let x=100; x>=1; x--){
        if(x % 3 == 0 && x % 5 == 0 ){
            $(".container").append("<p class='fizzbuzz fizzbuzz-background'>FizzBuzz</p>")
        }else if(x % 3 == 0 ){
            $(".container").append("<p class='fizzbuzz fizz-background'>Fizz</p>")
        }else if(x % 5 == 0){
            $(".container").append("<p class='fizzbuzz buzz-background'>Buzz</p>")
        }else{
            $(".container").append("<p class='fizzbuzz '>"+x+"</p>")            
        }
    }

})

let ratingValue;
const ratingNumber = $(".num-button");


//This gets the value of the button clicked.
$(document).ready(function() {
    ratingNumber.click(function() {
        ratingValue = /*alert*/($(this).attr("value"));
    });
});

for (let i = 0; i < ratingNumber.length; i++) {
    ratingNumber[i].addEventListener("click", handleClick);
    
    }

function handleClick() {
    //alert("i got clicked");
    $("#thank-page").show();
    $("#rating-page").hide();
    ratingValue = $(this).attr("value")
    //console.log(ratingValue);
    setTimeout(function() {
        $("#rating-page").show();
        $("#thank-page").hide();
    },2000);
}
$(document).ready(function() {
    $(".num-button").click(function() {
        $(".p2-colour").html("You selected " +ratingValue+ " out of 5");
        //console.log($(".p2-colour").html());
    });
});


//this hides a div using jquery. for future reference.
function hideDiv() {
    let hidden = $("#thank-page").hide();
}
hideDiv();

// function hideDiv2() {
//     let hidden2 = $("#thank-page").hide();
// }
// hideDiv2();
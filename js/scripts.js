var counter = 1;
var outPuts = [];

function countUpTo(countTo, countBy){
  for (i = 1; counter < countTo; i += 1) {
    outPuts.push(i * countBy);
    counter = (i * countBy);
  }
}

$(document).ready(function(){
  $("#countform").submit(function(event){
    event.preventDefault();
    var countToInput = parseInt($("#count-to").val());
    var countByInput = parseInt($("#count-by").val());

    if (isNaN(countToInput) || isNaN(countByInput)){
      $(".error").show();
      return;
    } else if ((countToInput < 0) || (countByInput < 0)){
      $(".negitive").show();
      return;
    } else if (countByInput > countToInput){
      $(".tooBig").show();
      return;
    }

    $(".error, #countform, .negitive, .tooBig").hide();

    countUpTo(countToInput, countByInput);

    outPuts.forEach(function(outPut){
      if (outPut <= countToInput){
        $("#output").append(outPut + " , ");
      }
    });

      $(".result, .return").show();
  });

  $(".return").click(function(){
    $(".result, .return").hide();
    $("#countform").show();
    $("#output").empty();
  });
});

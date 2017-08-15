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

    $(".error").hide();
    
    if (isNaN(countToInput) || isNaN(countByInput)){
      $(".error").show();
    }

    countUpTo(countToInput, countByInput);

    outPuts.forEach(function(outPut){
      if (outPut <= countToInput){
        $("#output").append(outPut + " , ");
      }
    });
  });
});

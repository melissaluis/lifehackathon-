 $(".housing").hide();
 $(".jobs").hide();
 $(".citizenship").hide();
$(".response").click(function() { 
  let userInput = $(".firstquestion").val();
  if (userInput === "housing") {
    $(".housing").show();
    $(".jobs").hide();
    $(".citizenship").hide();
  } else if (userInput === "jobs") {
    $(".jobs").show();
    $(".housing").hide();
    $(".citizenship").hide();
    } else if (userInput === "citizenship"){
    $(".citizenship").show();
      $(".jobs").hide();
      $(".housing").hide();
    // } elseCheck that you are using one of the serach terms")
  }
});

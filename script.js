$("#area").mouseenter(function(){
    $("#area").css("backgroundColor","green");
    alert("Close me to turn the box green");
});

$("#reset").click(function(){
   $("#area").css("backgroundColor","#953674") 
});
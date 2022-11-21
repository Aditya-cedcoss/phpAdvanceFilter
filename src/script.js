$(document).ready(function () {
    //click function for filtering text
    $("#filterBtn").click(function(){
        $(".displayResult").html("");
        $("#textArea").css("border", "1px solid black");
        var txt = $("#textArea").val();
        if(txt!= ""){
            //ajax call
            $.ajax({
                type: "POST",
                url: "./filterText.php",
                data: {txt : txt},
                success: function (response) {
                    //displaying output
                    $(".displayResult").html(response);
                }
            });
        } else {
            $("#textArea").css("border", "1px solid red");
        }
    })
});
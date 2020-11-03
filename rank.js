$(document).ready(function()
{
    $("form").submit(getGreeting);

    //other functions

    function getGreeting(event)
    {

        //flash
        event.preventDefault();

        //recieve rank
        var rank = $("input[name=rank]:checked");

        //recieve name
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();

        $("#greeting").text("Welcome, " + rank.val() + " " + firstName + " " + lastName);
        if (rank.val() === "King"){
            $("#greeting").css("color", "blue")
        }
        if (rank.val() === "Queen"){
            $("#greeting").css("color", "purple")
        }
        if (rank.val() === "Hand of the King"){
            $("#greeting").css("color", "green")
        }
        if (rank.val() === "Master of Coin"){
            $("#greeting").css("color", "red")
        }
        if (rank.val() === "Master of Whisperers"){
            $("#greeting").css("color", "orange")
        }
        if (rank.val() === "Handmaiden"){
            $("#greeting").css("color", "pink")
        }
    }
});
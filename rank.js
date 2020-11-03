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

        $("#greeting").text("Welcome, " + rank.val() + " " + firstName + " " + lastName)

    }
});
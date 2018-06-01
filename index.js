$(document).ready(function() {

    $("#submit").click(function() {

        /*event.preventDefault();*/

        var formData = $("form").serializeArray();
        console.log(formData);

        var nameInput = $("#name").val();
        console.log("Name Input: ", nameInput);
    })

})

var profileSelected;
    var profileUrl;
    var colorSelected;
    var colorCode;

$(document).ready(function() {

    // Variables for storing the currently selected profile or color

    $('.profile-select').hover(function() {
        // Check to see if a profile is already selected
        if (profileSelected) {
            var button = $(this).attr('id');
            // Check to see if the selected profile matches this then return
            if (profileSelected == button) {
                return;
            }
            else {
                // Otherwise set border-color to yellow to highlight the mouse over
                $(this).css("border-color", "yellow");
                $(this).css("border-width", "3px");
            }
        }
        else {
            // Otherwise set border-color to yellow to highlight the mouse over
            $(this).css("border-color", "yellow");
            $(this).css("border-width", "3px");
        }
        
    }, function(){
        // Check to see if a profile is already selected
        if (profileSelected) {
            // Check to see if the selected profile matches this then return
            var button = $(this).attr('id');
            if (profileSelected == button) {
                return;
            }
            else {
                // Otherwise return border-color to default black
                $(this).css("border-color", "black");
                $(this).css("border-width", "2px");
            }
        }
        else {
            // Otherwise return border-color to default black
            $(this).css("border-color", "black");
            $(this).css("border-width", "2px");
        };
    });

    $('.color-select').hover(function() {
        // Check to see if a color is already selected
        if (colorSelected) {
            var button = $(this).attr('id');
            // Check to see if the selected color matches this then return
            if (colorSelected == button) {
                return;
            }
            else {
                // Otherwise set border-color to yellow to highlight the mouse over
                $(this).css("border-color", "yellow");
                $(this).css("border-width", "3px");
            }
        }
        else {
            // Otherwise set border-color to yellow to highlight the mouse over
            $(this).css("border-color", "yellow");
            $(this).css("border-width", "3px");
        }
        
    }, function(){
        // Check to see if a color is already selected
        if (colorSelected) {
            // Check to see if the selected color matches this then return
            var button = $(this).attr('id');
            if (colorSelected == button) {
                return;
            }
            else {
                // Otherwise return border-color to default black
                $(this).css("border-color", "black");
                $(this).css("border-width", "2px");
            }
        }
        else {
            // Otherwise return border-color to default black
            $(this).css("border-color", "black");
            $(this).css("border-width", "2px");
        }
    });

    $('.profile-select').on("click", function() {

        // Check if a profile is selected and then deselect it if so
        if (profileSelected) {
            $('#' + profileSelected).css("border-color", "black");
        }

        profileSelected = $(this).attr('id');
        profileUrl = $(this).attr('src');
        $(this).css("border-color", "red");
        console.log(profileSelected);
        console.log(profileUrl);
    });

    $('.color-select').on("click", function() {
        // Check if a color is selected and then deselect it if so
        if (colorSelected) {
            $('#' + colorSelected).css("border-color", "black");
        }

        colorSelected = $(this).attr('id');
        colorCode = $(this).data("color");
        $(this).css("border-color", "red");
        console.log(colorSelected);
        console.log(colorCode);
    });

    $('#my-profile-img').on('click', function () {
        $('#myModal').modal()
    });

    $('#profileSubmit').on("click", function() {
        var profileObject = {
            id: userId,
            firstName: $('#firstName').val().trim(),
            lastName: $('#lastName').val().trim(),
            location: $('#location').val().trim(),
            hometown: $('#hometown').val().trim(),
            profileImgUrl: profileUrl,
            backgroundColor: colorCode,
        };

        console.log(profileObject);
        updateProfile(profileObject)
        $('#myModal').modal('toggle');
    });

    function updateProfile(profileObject) {
        $.ajax({
            url: "/api/profile/update/",
            method: "PUT",
            data: profileObject
        }).done(function(result) {
           location.reload();
        });
    }
});
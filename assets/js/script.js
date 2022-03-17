// search
document.addEventListener("touchstart", function(){}, true);
$(document).ready(function() {
    $('#search-box').on('keyup', function(event) {
        event.preventDefault();
        /* Act on the event */
        var keyWord = $(this).val().toLowerCase();
        $('.table-hover tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(keyWord)>-1);
        });
        });
    });

//show
function myFunction() {
    $(".filter").toggle();
}

//filter
$().ready(function() {
    $("#formCreatePro").validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "idPro": {
                required: true
            },
            "name": {
                required: true
            },
            "dev": {
                required: true
            },
            "idDev": {
                required: true
            },
            "fName": {
                required: true
            },
            "lName": {
                required: true
            },
            "pro": {
                required: true
            }
        },
        messages: {
            "idPro": {
                required: "Please enter ID Project",
            },
            "name": {
                required: "Please enter name project",
            },
            "dev": {
                required: "Please choose our dev",
            },
            "idDev": {
                required: "Please enter ID Project",
            },
            "lname": {
                required: "Please enter name project",
            },
            "pro": {
                required: "Please choose our dev",
            }
        },
        submitHandler: function(form) {
            form.submit();
            }
    });
});

//pagination
$(document).ready(function() {
    $('#example').DataTable();
} );
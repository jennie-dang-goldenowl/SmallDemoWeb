    // search
    document.addEventListener("touchstart", function () {}, true);
    $(document).ready(function () {
    $("#search-box").on("keyup", function (event) {
        event.preventDefault();
        var keyWord = $(this).val().toLowerCase();
        $(".table-hover tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(keyWord) > -1);
        });
    });
    });

    //pagination
    $(document).ready(function () {
    $("#example").DataTable();
    });

//filter
var inputStartDate = document.getElementById("inputStartDate");
var inputEndDate = document.getElementById("inputEndDate");

function filterDay() {
    var table, tr, tdStart, tdEnd, i;
    table = document.getElementById("example");
    tr = table.getElementsByTagName("tr");
    if (!inputStartDate && !inputEndDate) {
        table.style.display = "none";
    } else {
    for (i = 0; i < tr.length; i++) {
        tdStart = tr[i].getElementsByTagName("td")[3];
        tdEnd = tr[i].getElementsByTagName("td")[4];
        if (tdStart && tdEnd) {
        if ((tdStart > inputStartDate) && (tdEnd < inputEndDate)) {
        table.style.display = "table";
        tr[i].style.display = "";
        } else {
        tr[i].style.display = "none";
        }
    }
    }
    }
}
inputEndDate.addEventListener("keyup", filterDay);

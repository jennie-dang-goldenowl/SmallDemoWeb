//pagination
$(document).ready(function () {
  $("#example").DataTable();
});

function searchFunction() {
  debugger;
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-box");
  filter = input.value.toUpperCase();
  table = document.getElementById("example");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//filter
var inputStartDate = document.getElementById("inputStartDate");
var inputEndDate = document.getElementById("inputEndDate");
// var timeInputStart = inputStartDate.getTime();
// var timeInputEnd = inputEndDate.getTime();

function filterDay() {
  var table, tr, tdStart, tdEnd, i, timeStart, timeEnd, yearS, monthS, dayS, yearE, monthE, dayE;
  table = document.getElementById("example");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    debugger
    tdStart = tr[i].getElementsByTagName("td")[3];
    tdStart = tdStart.textContent;
    timeStart = tdStart.split("/").reverse().join("");
    yearS = +timeStart.substring(0, 4);
    monthS = +timeStart.substring(4, 6);
    dayS = +timeStart.substring(6, 8);
    timeStart = new Date(yearS, monthS - 1, dayS);
    tdEnd = tr[i].getElementsByTagName("td")[4];
    tdEnd = tdEnd.textContent;
    timeEnd = tdEnd.split("/").reverse().join("");
    yearE = +timeEnd.substring(0, 4);
    monthE = +timeEnd.substring(4, 6);
    dayE = +timeEnd.substring(6, 8);
    timeEnd = new Date(yearE, monthE - 1, dayE);
    if (timeStart >= inputStartDate && timeEnd <= inputEndDate) {
      tr[i].style.display = "block";
    } else {
      tr[i].style.display = "none";
    }
  }
}

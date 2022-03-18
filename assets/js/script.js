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
var timeInputStart = parseDate(inputStartDate).getTime();
var timeInputEnd = parseDate(inputEndDate).getTime();

function filterDay() {
  var table, tr, tdStart, tdEnd, i, timeStart, timeEnd;
  table = document.getElementById("example");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    tdStart = tr[i].getElementsByTagName("td")[3];
    timeStart = parseDate(tdStart).getTime();
    tdEnd = tr[i].getElementsByTagName("td")[4];
    timeEnd = parseDate(tdEnd).getTime();
    if (startTime > inputStartDate && endTime < inputEndDate) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

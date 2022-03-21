//pagination
$(document).ready(function () {
  $("#tableProject").DataTable();
});

function searchFunction() {
  debugger;
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-box");
  filter = input.value.toUpperCase();
  table = document.getElementById("tableProject");
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
let inputStartDate = document.getElementById("inputStartDate").value;
let inputEndDate = document.getElementById("inputEndDate").value;

function filterDay() {
  let tdStart, tdEnd, i, timeStart, timeEnd;
  let table = document.getElementById("tableProject");
  let tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    tdStart = tr[i].getElementsByTagName("td")[3];
    tdStart = tdStart.textContent;
    timeStart = tdStart.split("/");
    timeStartDate = new Date(timeStart[2], timeStart[1] - 1, timeStart[0]);
    tdEnd = tr[i].getElementsByTagName("td")[4];
    tdEnd = tdEnd.textContent;
    timeEnd = tdEnd.split("/");
    timeEndDate = new Date(timeEnd[2], timeEnd[1] - 1, timeEnd[0]);
    if (timeStart >= inputStartDate && timeEnd <= inputEndDate) {
      tr[i].style.display = "block";
    } else {
      tr[i].style.display = "none";
    }
  }
}

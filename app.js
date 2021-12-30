
function addList() {
    var inputText = document.getElementById("add-task").value;

    if (inputText === "")   {
        window.alert("This task does not appear to exist.")
    } else {

    document.getElementById("table-container").innerHTML +=
    "<div class='task-list'><input class='task-list-check'type='checkbox'></input>" + inputText + "</div>";


    // console.log(inputText);
    }
} 
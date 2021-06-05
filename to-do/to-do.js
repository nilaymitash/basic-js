var itemCounter = 0;

function addItem() {
    itemCounter++;
    var item = document.getElementById("to-do-item").value;
    document.getElementById("task-list").innerHTML += createListItem(item);
}

function clearList() {
    document.getElementById("task-list").innerHTML = null;
    itemCounter = 0;
}

function createListItem(item) {
    return "<li id='li_" +itemCounter+ "'>" 
    + "<span id='li_text" +itemCounter+ "'>" +item+"</span>" 
    + "&nbsp;&nbsp;&nbsp;&nbsp;<button type='button' class='btn btn-primary' onclick=\"removeThisItem('li_" +itemCounter+ "')\">X</button>"
    + "&nbsp;&nbsp;&nbsp;&nbsp;<button type='button' class='btn btn-primary' onclick=\"markAsDone('li_text" +itemCounter+ "')\">Mark as done</button>"
    + "</li>";
}

function removeThisItem(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}

function markAsDone(id) {
    document.getElementById(id).style = "color: green; text-decoration: line-through;";
}
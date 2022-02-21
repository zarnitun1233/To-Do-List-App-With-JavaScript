function task() {
    let text = document.querySelector("input").value;
    if ((!text) || (/^\s*$/.test(text))) return false;
    let task = document.createElement("li");
    task.textContent = text;
    task.classList.add("list-group-item", "mb-1");
    let del = document.createElement("i");
    del.classList.add("fas", "fa-trash", "float-end", "text-danger");
    del.onclick = function () {
        del.parentNode.remove();
    };
    document.querySelector("#delete-all").style.display = "block";
    document.querySelector("ul").appendChild(task);
    task.appendChild(del);
    document.querySelector("#new").value = "";
    document.querySelector("#new").focus();
};

function deleteAll() {
    let tasks = document.querySelector("#tasks");
    while (tasks.firstChild) {
        tasks.removeChild(tasks.firstChild);
    }
    document.querySelector("#delete-all").style.display = "none";
};

document.querySelector("button").onclick = task;
document.querySelector("#new").onkeydown = function (e) {
    if (e.which === 13) task();
    document.querySelector("#delete-all").onclick = deleteAll;
};
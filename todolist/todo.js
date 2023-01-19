let btn = document.getElementById("btn");
let list = document.getElementById("list");
let input = document.getElementById("input");
let form = document.getElementById("form");
const deletediv = document.getElementById("delete-all");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputvalue = input.value;

  if (!inputvalue) {
    alert("Inserisci un task");
  } else {
    var task = document.createElement("li");
    let tasktext = document.createTextNode(inputvalue);

    var editbutton = document.createElement("button");
    editbutton.className = "edit";
    editbutton.setAttribute("type", "button");
    editbutton.innerHTML = `<i class="fa fa-pencil-square-o" aria-hidden="true"></i>`;

    var deletebutton = document.createElement("button");
    deletebutton.className = "delete";
    deletebutton.setAttribute("type", "button");
    deletebutton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

    task.appendChild(tasktext);
    list.appendChild(task);

    task.appendChild(editbutton);

    task.appendChild(deletebutton);

    input.value = "";
  }

  deletediv.style.display = "block";

  deletediv.addEventListener("click", () => {
    task.remove();
    deletediv.style.display = "none";
  });

  deletebutton.addEventListener("click", () => {
    task.remove();
  });

  editbutton.addEventListener("click", () => {
    let newli = document.createElement("li");

    let newinput = document.createElement("input");
    newinput.className = "newinput";
    let savebutton = document.createElement("button");

    savebutton.setAttribute("type", "button");
    savebutton.className = "save";
    savebutton.innerHTML = `<i class="fa fa-floppy-o " aria-hidden="true"></i> `;

    newli.appendChild(newinput);
    newli.appendChild(savebutton);

    list.replaceChild(newli, task);

    savebutton.addEventListener("click", () => {
      newinputvalue = newinput.value;

      if (!newinputvalue) {
        alert("Insert an edit");
      } else {
        task = document.createElement("li");
        tasktext = document.createTextNode(newinputvalue);

        task.appendChild(tasktext);
        task.appendChild(editbutton);
        task.appendChild(deletebutton);

        list.replaceChild(task, newli);
      }
    });
  });
});

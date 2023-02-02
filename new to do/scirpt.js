const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const list = document.getElementById("list");
const deleteAllButton = document.getElementById("deleteall")

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let inputvalue = input.value;
    
    

    if (!inputvalue) {
      alert("Inserisci un task");
    } else {
      let task = document.createElement("li");
      let taskinput = document.createElement("input");
      taskinput.disabled= true;
      taskinput.value = inputvalue;
    

      list.appendChild(task)
      task.appendChild(taskinput)
      input.value = ''

      let buttonDiv = document.createElement("div")
      task.appendChild(buttonDiv)
      
      let editButton = document.createElement("button");
      let editText = document.createTextNode("Edit")
      editButton.type = "button"
      editButton.id ="edit"
      editButton.appendChild(editText)
      buttonDiv.appendChild(editButton)

      let deleteButton = document.createElement("button");
      let deleteText = document.createTextNode("Delete")
      deleteButton.type = "button"
      deleteButton.id= "delete"
      deleteButton.appendChild(deleteText)
      buttonDiv.appendChild(deleteButton)

      
      if (list.childNodes.length > 0) {
        deleteAllButton.style.display = "block";
      } else {
        deleteAllButton.style.display = "none";
      }  
      deleteAllButton.addEventListener('click', () => {
        deleteAllButton.style.display= "none"
        list.innerHTML = '';
        


    })
  

     

      editButton.addEventListener("click", () =>{
         taskinput.disabled = false
         editButton.style.display= "none"
         deleteButton.style.display= "none"


         let saveButton = document.createElement("button");
         let saveText = document.createTextNode("Save")
         saveButton.type = "button"
         saveButton.id ="save"
         saveButton.appendChild(saveText)
         task.appendChild(saveButton)  
        
        saveButton.addEventListener("click", () => {

            console.log(taskinput.value)

            if(!taskinput.value){
                alert("Input field is empty")
            }else{
            taskinput.disabled = true;
            editButton.style.display= "block"
            deleteButton.style.display= "block"
            saveButton.remove()
            }
        

        })
    })

    deleteButton.addEventListener ('click', ()=>{
        
      
            task.remove()
        if (list.childNodes.length === 0) {
          deleteAllButton.style.display = "none";}
        
    })

    }

  

    })



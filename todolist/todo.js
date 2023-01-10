let bottone = document.getElementById ("bottone")
let list = document.getElementById ("list")
// bottone.addEventListener("click", aggiungiTask() );
let input = document.getElementById ("input")
let form = document.getElementById ("form")






form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let inputvalue = input.value

    if (!inputvalue){
        alert("Inserisci un task")
    }
    else {
    var task= document.createElement ("li")
    let tasktext= document.createTextNode (inputvalue)

    var editbutton = document.createElement ("button")
    editbutton.className = "edit";
    editbutton.setAttribute("type", "button")
    editbutton.innerHTML= `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.88" style="enable-background:new 0 0 122.88 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44S0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z M52.56,84c-1.82,0.61-3.68,1.17-5.5,1.77c-1.82,0.61-3.64,1.21-5.5,1.82 c-4.34,1.4-6.71,2.19-7.23,2.33c-0.51,0.14-0.19-1.86,0.89-6.06l3.45-13.19l26.01-27.04l13.85,13.33L52.56,84L52.56,84L52.56,84z M78.48,33.84c-0.65-0.61-1.4-0.93-2.24-0.89c-0.84,0-1.59,0.33-2.19,0.98l-4.94,5.13l13.85,13.38l4.99-5.22 c0.61-0.61,0.84-1.4,0.84-2.24c0-0.84-0.33-1.63-0.93-2.19L78.48,33.84L78.48,33.84L78.48,33.84z"/></g></svg>`

    var deletebutton = document.createElement ("button")
    deletebutton.className = "delete";
    deletebutton.setAttribute("type", "button")
    // var deletebuttontext = document.createTextNode ("delete")
    deletebutton.innerHTML = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.16 122.88"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>delete</title><path class="cls-1" d="M11.17,37.16H94.65a8.4,8.4,0,0,1,2,.16,5.93,5.93,0,0,1,2.88,1.56,5.43,5.43,0,0,1,1.64,3.34,7.65,7.65,0,0,1-.06,1.44L94,117.31v0l0,.13,0,.28v0a7.06,7.06,0,0,1-.2.9v0l0,.06v0a5.89,5.89,0,0,1-5.47,4.07H17.32a6.17,6.17,0,0,1-1.25-.19,6.17,6.17,0,0,1-1.16-.48h0a6.18,6.18,0,0,1-3.08-4.88l-7-73.49a7.69,7.69,0,0,1-.06-1.66,5.37,5.37,0,0,1,1.63-3.29,6,6,0,0,1,3-1.58,8.94,8.94,0,0,1,1.79-.13ZM5.65,8.8H37.12V6h0a2.44,2.44,0,0,1,0-.27,6,6,0,0,1,1.76-4h0A6,6,0,0,1,43.09,0H62.46l.3,0a6,6,0,0,1,5.7,6V6h0V8.8h32l.39,0a4.7,4.7,0,0,1,4.31,4.43c0,.18,0,.32,0,.5v9.86a2.59,2.59,0,0,1-2.59,2.59H2.59A2.59,2.59,0,0,1,0,23.62V13.53H0a1.56,1.56,0,0,1,0-.31v0A4.72,4.72,0,0,1,3.88,8.88,10.4,10.4,0,0,1,5.65,8.8Zm42.1,52.7a4.77,4.77,0,0,1,9.49,0v37a4.77,4.77,0,0,1-9.49,0v-37Zm23.73-.2a4.58,4.58,0,0,1,5-4.06,4.47,4.47,0,0,1,4.51,4.46l-2,37a4.57,4.57,0,0,1-5,4.06,4.47,4.47,0,0,1-4.51-4.46l2-37ZM25,61.7a4.46,4.46,0,0,1,4.5-4.46,4.58,4.58,0,0,1,5,4.06l2,37a4.47,4.47,0,0,1-4.51,4.46,4.57,4.57,0,0,1-5-4.06l-2-37Z"/></svg>`


    task.appendChild(tasktext)
    list.appendChild(task)

    task.appendChild(editbutton)
    
    // deletebutton.appendChild(deletebuttontext)
    task.appendChild(deletebutton)

    input.value= ""    
    }

    deletebutton.addEventListener("click", () => {
       task.remove()
    })

    editbutton.addEventListener("click", ()  => {
           
           
        
        var newli = document.createElement ("li")
        

        var newinput= document.createElement ("input")
        newinput.className = "newinput"
        var savebutton = document.createElement ("button")
        
        savebutton.setAttribute ("type", "button")
        savebutton.className = "save"
        savebutton.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path d="M256 0c70.68 0 134.69 28.66 181.02 74.98C483.34 121.3 512 185.31 512 256c0 70.68-28.66 134.69-74.98 181.02C390.69 483.34 326.68 512 256 512c-70.69 0-134.7-28.66-181.02-74.98C28.66 390.69 0 326.68 0 256c0-70.69 28.66-134.7 74.98-181.02C121.3 28.66 185.31 0 256 0zm-91.6 236.61c18.39 10.59 30.36 19.4 44.61 35.11 36.96-59.51 77.08-92.47 129.26-139.26l5.1-1.97h57.09c-76.55 85.02-135.9 155.12-189.04 257.63-27.67-59.16-52.33-99.99-107.51-137.85l60.49-13.66z"/></svg>`

        // var savebuttontext = document.createTextNode ("save")
       
        
        newli.appendChild (newinput)
        newli.appendChild (savebutton)
        // savebutton.appendChild (savebuttontext)
    
        
        list.replaceChild(newli, task);

        savebutton.addEventListener("click", () =>{
            newinputvalue = newinput.value

            if (!newinputvalue){
                alert("Insert an edit")
            }
            
            else{
             task = document.createElement ("li")
             tasktext= document.createTextNode (newinputvalue)

            task.appendChild(tasktext)
            task.appendChild(editbutton)
            task.appendChild(deletebutton)

            list.replaceChild(task, newli)

            
            
             
            }
        })

        
        
    })
    

        
})


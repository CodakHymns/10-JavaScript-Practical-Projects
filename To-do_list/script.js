const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

// This gives the user the chance of also adding events to the lts when the enter key is pressed
inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
       addTask();
    }
   });


//This marks the beginning of the addTask() function from the button ADD when clicked
function addTask(){
    
    if(inputBox.value === ''){

        alert("Enter some data");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);


        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveTask();
}

//event is the sameas e-shortform
//This code allows you to mark a list iem as checked or uncheckde by clicking on it

//A click event listener is attached to the code, when the element is clicked, the event is passed.

listContainer.addEventListener("click", function(e){
    /*the event listener is targeted only when the 'target' of the event (the clicked event)\
     is a list item element*/

    if(e.target.tagName === "LI"){

        //This toggles the checked class on and off done by the classList.toggle() method
        
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        //This removes the Element when the span is clicked
        e.target.parentElement.remove();
        saveTask();

    }
});
//function to save task in the local storage. 
//You can inspect the web page,click on application and local storage to confirm if it is working
function saveTask(){
    localStorage.setItem("data", listContainer.innerHTML)
}

//Show data found in Local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
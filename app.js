document.getElementById("btnAddTask").addEventListener("click",addTask);
let todoTasks=[];
let doneTasks=[];

function addTask(){
    let userInput = document.getElementById("txtUserInput").value;
    todoTasks.push(userInput);

    // Adding a checkbox with the task to the body

    let body="";
    for(let i=0;i<todoTasks.length;i++){
       body+=`<div class="form-check">
          <label class="form-check-label" for="flexCheckIndeterminate">
          ${todoTasks[i]}
          </label>
       <input class="form-check-input border-3 border-black" type="checkbox" value="" id=${i}>
      </div>
        `
        
        ;
    }
    
    document.getElementById("todoList").innerHTML=body;

    for (let j = 0; j< todoTasks.length; j++) {
      document.getElementById(`${j}`).addEventListener("change",addDonetask)

    }
  }
  
    
    function addDonetask(){
      let checkId=parseInt(this.id,10);
      doneTasks.push(todoTasks[checkId]);
      todoTasks.splice(checkId,1);

      // Adding a checkbox with the task to the body

      let body1="";
      for(let i=0;i<todoTasks.length;i++){
        body1+=`<div class="form-check">      
        <label class="form-check-label" for="flexCheckIndeterminate">
        ${todoTasks[i]}
        </label>
     <input class="form-check-input border-3 border-black" type="checkbox" value="" id=${i}>
    </div>
      `
          ;

      }
      document.getElementById("todoList").innerHTML=body1;

      for (let j = 0; j< todoTasks.length; j++) {
        document.getElementById(`${j}`).addEventListener("change",addDonetask)
  
      }
      
      
      let body2="";
      for(let j=0;j<doneTasks.length;j++){

      // Adding th donetasklist to the body

           body2+=`<div class="form-check ">      
        <label class="form-check-label " for="flexCheckIndeterminate">
        ${doneTasks[j]}
        </label>
    </div>
      `
            ;
        
      }

      let donelist=document.getElementById("donelist").innerHTML=body2;

    
  
    }
  


   


    



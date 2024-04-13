

import inquirer from "inquirer";
 import chalk from "chalk";


 console.log(chalk.green`\n\t\ Todo List Application:`);


 let todos:string[] =  [];
 let condition = true;


 while (condition)  { 

let options = await inquirer.prompt([
     {
        name: "selectoption",
         type:"list",
        message:chalk.red("Pick one option:"),
         choices:["AddTask","DeleteTask","UpdateTask","ReadTask","Exit"]

    }
]);


// Add task in todo list.
if (options.selectoption === "AddTask"){


    
    
    let addtodo = await inquirer.prompt([
        {
            name: "TODO",
            type: "input",
            message:chalk.red( "What u want to add in todo list?")

        }
    ]);
    
     todos.push(addtodo.TODO);
     console.log(  chalk.blue(addtodo.TODO + ":" +  " task is added in todo list."));
     

}
// Delete task in todo list.
      else if  (options.selectoption === "DeleteTask"){
        if (todos.length === 0){
            console.log( chalk.yellow`Your todo list is empty. No one task to Delete.`);
        }else{
            let deletetaskname = await inquirer.prompt([
                { 
                  name: "name",
                  type:"input",
                  message:chalk.red("Write the task u want to delete.")

                }

            ]);
            todos.splice(todos.indexOf(deletetaskname.name ) ,1);
            console.log(chalk.yellow(chalk.magenta( deletetaskname.name  + ":" +  " task is deleted in your todo list.")));
        }
            
       
    }
    // Update task in todo list.
    
    else if (options.selectoption === "UpdateTask") {
        if (todos.length === 0) {
            console.log(chalk.yellow`Your todo list is empty. No one task to Update.`);
        } else {
            let todoupdate = await inquirer.prompt([
                {
                    name: "update", 
                    type: "input",
                    message:chalk.red( "Enter the index number you want to update in todo list.")
                },
                {
                    name: "newtask",            
                    type: "input",
                    message:chalk.red( "Enter the new task.")
                }
            ]);

            if (todoupdate.update >=1  && todoupdate.update <= todos.length){
             todos[todoupdate.update -1 ] = todoupdate.newtask;
             console.log(chalk.magenta("Task is updated successfully." ));
            }
            else{
                console.log( chalk.yellow`Please enter a valid index.`);
            }
        }
    }
    // Read task in todo list.
    else if (options.selectoption === "ReadTask"){
        if (todos.length === 0){
           console.log( chalk.yellow`Your todo list is empty. No one task to Read.`);
            }
            else{
                console.log(`\n Your Todo List:`);
                todos.forEach((task,index) => {
                    console.log(`${index +1 }. ${task}`);
                })
            }
    
    }
    // Checkout from todo list.
     else if (options.selectoption === "Exit"){
         condition = false;
         
        if (todos.length === 0){
           console.log(chalk.yellow`Please select a valid option.`);
       }
       else{
           console.log(chalk.blueBright`Thankyou for using todo list.`);
       }
       
   }
    }
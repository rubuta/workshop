let todos = {


  /* TODO LIST - Global scope
  -------------------------------*/
  todoList: [

    {
      text:     "Go shopping",
      completed: false
    },

    {
      text:      "Buy tobacco",
      completed: false
    },   

    {
      text:     "Do this",
      completed: false
    },    
    
    {
      text:     "Do that",
      completed: false
    },
   
  ],


  /* DISPLAY TODOS
  -------------------------------*/
  displayTodos: function() {
    console.log(this.todoList);
  },


  /* ADD TODO
  -------------------------------*/
  addTodo: function(newText, newCompleted = false) {

    this.todoList.push({
      text: newText,
      competed: newCompleted
    });
    //this.todoList.splice(index, 0, text);
    this.displayTodos();
    addTodo("love", true);
    show(todoList);
  },
    

  /* CHANGE A TODO
  -------------------------------*/
  changeTodo: function(index, key, text) {

    this.todoList[index][key] = text;
    //this.todoList.splice(index, 1, text);
    this.displayTodos();
    changeTodo(1,text, mamo);
    show(todoList)
  },



  /* DELETE A TODO
  -------------------------------*/
  deleteTodo: function(index, numberToDelete = 1) {

    this.todoList.splice(index, numberToDelete);
    this.displayTodos();

  }


}

/* practice area
-------------------------------------------- */
/*let myLists = [
  //we can do this 
  ["learn css", "2020.04.31", true],
  ["learn html", "2020.05.10", false]
];*/

let myLists =[
  
  {
    text:      "learn html",
    deadline:  "2020.04.30",
    completed: true
  },

  {
    text:      "learn css",
    deadline:  "2020.05.15",
    completed: false
  },

  {
    text:      "learn js",
    deadline:  "2020.05.30",
    completed: false
  }

];

// we have to write like this the dade line because 
//it is in the object
//show(myLists[0]["deadline"]);
//show(myLists[0].deadline);


//show(myLists[0]["deadline"]);

//to change
//myLists[1].completed = true;
//show(myLists[1]);

// to delete
//myLists.splice(1, 1);
//show(myLists[1]);


// to add lists
/*myLists.push( {
  text:      "bob",
  deadline:  "2020.04.30",
  completed: true
});*/

//show(myLists);
function addList (newText, newDeadLine, newCompleted = false){
  myLists.push({
    text: newText, 
    deadline: newDeadLine,
    completed: newCompleted
  });
}
addList("bob", "2020.04.31");
//show(myLists);


function deleteList (index, deleteNo = 1){
  myLists.splice(index, deleteNo);
}

//show(myLists.length, "list length")
//to delete all after list
//deleteList(1, myLists.length);
//show(myLists);
function changeKeyValue(index, key, value){
  //the key is the argument and should be used inside bracket[]
  //other wise, with dot notation, will be considered as a real "key"
  //myLists[index].key=value; wrong 
   myLists[index][key] = value; //good
}
//in order to
changeKeyValue(1, "completed", true);
changeKeyValue(1, "text", "true");
//show(myLists);











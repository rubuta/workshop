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
  addTodo: function(text) {

    this.todoList.push(text);
    //this.todoList.splice(index, 0, text);
    this.displayTodos();

  },


  /* CHANGE A TODO
  -------------------------------*/
  changeTodo: function(index, text) {

    this.todoList[index] = text;
    //this.todoList.splice(index, 1, text);
    this.displayTodos();

  },



  /* DELETE A TODO
  -------------------------------*/
  deleteTodo: function(index, numberToDelete = 1) {

    this.todoList.splice(index, numberToDelete);
    this.displayTodos();

  }


}


todos.displayTodos();
todos.addTodo("Test todo");
todos.deleteTodo(1);
todos.changeTodo(2, "Some other value for this todo");
















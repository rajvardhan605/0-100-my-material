/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
<<<<<<< HEAD
  constructor(){
    this.todo = [];
  }
  add(task){
    this.todo.push(task);
  }
  remove(index){
    this.todo.splice(index,1);
  }
  update(index,task){
    if(index < this.todo.length){
      this.todo[index] = task;
    }
  }
  getAll(){
    return this.todo;
  }
  get(index){
    if(index >= this.todo.length){
      return null;
    }
    return this.todo[index];
  }
  clear(){
    this.todo = [];
  }
=======

>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
}

module.exports = Todo;

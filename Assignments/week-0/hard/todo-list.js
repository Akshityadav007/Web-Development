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
  constructor(){
    this.toDo = [];
  }

  add(todo){
    this.toDo.push(todo);
  }

  remove(indexOfTodo){
    // right shift the array
    for(let i = indexOfTodo; i < this.toDo.length; i++){
      this.toDo[i] = this.toDo[i + 1];
    }

    this.toDo.pop();
  }

  update(index, updatedTodo){
    this.toDo[index] = updatedTodo;
  }

  getAll(){
    return this.toDo;
  }

  get(indexOfTodo){
    return this.toDo[indexOfTodo];
  }

  clear(){
    this.toDo.length = 0;
  }

}

module.exports = Todo;

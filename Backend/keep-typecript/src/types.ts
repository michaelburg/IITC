export interface Todo {
    _id: string;
    title: string;
    isComplete: boolean;
  }
  
  export interface Task {
    _id: string;
    title: string;
    body: string;
    todoList: Todo[];
    isPinned:boolean
  }
  
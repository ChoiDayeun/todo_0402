class TodoItem {
    constructor(title, deadline) {
      this.title = title;
      this.deadline = deadline;
      this.completed = false;
    }
  
    toggleComplete() {
      this.completed = !this.completed;
    }
  
    delete() {
      // 삭제 기능 구현
    }
  }
  
  export default TodoItem;
import { TodoItem } from './TodoItem.js';

export class TodoList {
  constructor(title) {
    this.title = title;
    this.items = {};
  }

  addItem(title, deadline) {
    const newItem = new TodoItem(title, deadline);
    const date = deadline.toDateString(); // 마감일로부터 날짜를 얻음

    if (!this.items[date]) {
      this.items[date] = []; // 해당 날짜의 할 일 목록이 없으면 새로 생성
    }

    this.items[date].push(newItem); // 해당 날짜의 할 일 목록에 추가
  }

  // 다른 필요한 메서드 추가 가능
}
import { Injectable } from '@nestjs/common';
import { TodoItem } from '../interfaces/todo_item.interface'

@Injectable()
 export class TodoItemService{
    private readonly todoitem: TodoItem[]

    constructor(todoitems: TodoItem[] = []) {
        this.todoitem = todoitems;
    }

    all(): TodoItem[] {
        return this.todoitem;
      }
 }
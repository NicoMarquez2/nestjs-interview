import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';

  import { TodoItemService } from '../todo_items/todo_items.service'
  import { TodoItem } from '../interfaces/todo_item.interface'


  @Controller('/api/todolists/:todolistid')
  export class TodoItemController{
    constructor(private todoItemService: TodoItemService) {}


    @Get('/items')
    index(@Param() param: { todolistid: number }): TodoItem[] {
        return this.todoItemService.all()
    }
  }


  //localhost:3000/api/todolist/1/items
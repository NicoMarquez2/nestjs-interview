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
  import { CreateTodoItemDto } from '../todo_items/dtos/create-todo_items'
  import { UpdateTodoItemDto } from '../todo_items/dtos/update-todo_items'

  @Controller('/api/todolists/:todolistid')
  export class TodoItemController{
    constructor(private todoItemService: TodoItemService) {}


    @Get('/items')
    index(@Param() param: { todolistid: number }): TodoItem[] {
        return this.todoItemService.all(param)
    }

    @Post('/items')
    create(@Body() dto: CreateTodoItemDto, @Param() param: { todolistid: number }): TodoItem {
      return this.todoItemService.create(dto, param);
    }

    @Put('/items/:todoItemId')
    update(@Param() param: { todoListId: number, todoItemId: number },
            @Body() dto: UpdateTodoItemDto,): TodoItem {
      return this.todoItemService.update(param, dto);
    }


    @Delete('items/:todoItemId')
    delete(@Param() param: { todoListId: number, todoItemId: number }): void {
      this.todoItemService.delete(param);
    }
  }


  //localhost:3000/api/todolist/1/items
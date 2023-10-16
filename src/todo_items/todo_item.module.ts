import { Module } from '@nestjs/common';
import { TodoItemController } from './todo_items.controllers';
import { TodoItemService } from './todo_items.service';

@Module({
    imports: [],
    controllers: [TodoItemController],
    providers: [
        {provide: TodoItemService, useValue: new TodoItemService([])}
    ]
})

export class TodoItemModule{}
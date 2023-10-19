import { Injectable } from '@nestjs/common';
import { TodoItem } from '../interfaces/todo_item.interface'
import { CreateTodoItemDto } from '../todo_items/dtos/create-todo_items'
import { UpdateTodoItemDto } from '../todo_items/dtos/update-todo_items'

@Injectable()
 export class TodoItemService{
    private readonly todoitem: TodoItem[]

    constructor(todoitems: TodoItem[] = []) {
        this.todoitem = todoitems;
    }

    nextId(id){
        const items : TodoItem[] = this.todoitem.filter((e)=>{return e.listId == id});
        if(items.length > 0){
            const last: number = items.sort()[items.length - 1].id
            return last + 1
        }
        else
        return 1
    }

    all(id): TodoItem[] {
        const items : TodoItem[] = this.todoitem.filter((e)=>{return e.listId == id.todolistid});
        return items;
        }


    
    create(dto: CreateTodoItemDto, id): TodoItem {
    const TodoItem: TodoItem = {
        listId: Number(id.todolistid),
        id: this.nextId(Number(id.todolistid)),
        name: dto.name,
        description: dto.description
    };
        
    this.todoitem.push(TodoItem);
        
    return TodoItem;
    }



    update(param, dto: UpdateTodoItemDto): TodoItem {
        const items : TodoItem[] = this.todoitem.filter((e)=>{return e.listId == param.todolistid});
        const item = items.find((e) => e.id == param.todoItemId)
        
        item.name = dto.name
        item.description = dto.description
        
        return item;
        }

        
    delete(param): void {
        const items : TodoItem[] = this.todoitem.filter((e)=>{return e.listId == param.todolistid});
        const index = items.findIndex((e) => e.id == Number(param.todoItemId));
        
        if (index > -1) {
            this.todoitem.splice(index, 1);
        }
        }
 }
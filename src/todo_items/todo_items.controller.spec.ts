import { Test, TestingModule } from '@nestjs/testing'
import { TodoItemController } from './todo_items.controllers'
import { TodoItemService } from './todo_items.service'


describe('TodoItemController', () => {
    let todoItemService: TodoItemService;
    let todoItemController: TodoItemController;
  
    beforeEach(async () => {
      todoItemService = new TodoItemService([
        {listId: 1, id: 1, name: 'test1', description: "desc1" },
        {listId: 2, id: 1, name: 'test2', description: "desc2" },
      ]);
  
      const app: TestingModule = await Test.createTestingModule({
        controllers: [TodoItemController],
        providers: [{ provide: TodoItemService, useValue: todoItemService }],
      }).compile();
  
      todoItemController = app.get<TodoItemController>(TodoItemController);
    });


    describe('index', () => {
      it('should return the items of todolist with id = 1', () => {
        expect(todoItemController.index({todolistid: 1})).toEqual([
          {listId: 1, id: 1, name: 'test1', description: "desc1"}
        ]);
      });
    });
  
    describe('create', () => {
      it('should add an item to a list with the given id', () => {
        expect(todoItemController.create({name:"new", description: "new desc"}, {todolistid: 1})).toEqual({
            listId: 1,
            id: 2,
            name: 'new',
            description: 'new desc'
        });
      });
    });
  
    describe('delete', () => {
      it('should delete the item with the given id from the list with the given id', () => {
        expect(() => todoItemController.delete({todoListId: 1, todoItemId: 1})).not.toThrow();
      });
    });
  });
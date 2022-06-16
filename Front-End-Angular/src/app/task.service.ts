import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './pages/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }


  getLists() {
    return this.webReqService.get('lists');
  }

  getUser() {
    return this.webReqService.get('login/users');
  }

  createList(title: string, desc: string, type: string, date: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('lists', { title, desc, type, date });
  }

  updateList(id: string, title: string, date: string, state: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${id}`, { title, date, state });
  }

  updateTask(listId: string, taskId: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title });
  }

  deleteTask(listId: string, taskId: string) {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  getTasks(listId: string) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string) {
    // We want to send a web request to create a task
    return this.webReqService.post(`lists/${listId}/tasks`, { title });
  }

  complete(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    });
  }
}
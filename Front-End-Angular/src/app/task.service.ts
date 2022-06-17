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

  updateList(id: string, title: string, desc: string, type:string, date: string, state: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${id}`, { title, desc, type, date, state });
  }

  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  complete(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    });
  }
}
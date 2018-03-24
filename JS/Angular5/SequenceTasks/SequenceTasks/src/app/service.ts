import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Task} from './app.task'

@Injectable()
export class Service {

  _tasks :Array<Task>;

  url: string = "http://jsonplaceholder.typicode.com/posts/";
constructor(private _http:HttpClient)
{

}

   public getTasks(): Observable<Array<Task>>
  {
    let tasks = this._http.get(this.url)
       .map(response  => response
         // let tasksArray : Array<Task> = new Array<Task>();
         // for(let res of response. ){
         //   let task = new Task(res['id'], res['title'])
         //   tasksArray.push(task);
         // }
         // return tasksArray;
       )
      .catch(this.handleError);
    return tasks;
  }

  public getTask(id: string): Observable<Task> {
    let task = this._http.get(this.url + "/" + id)
      .map(response  => response)
      .catch(this.handleError);
    return task;
  }




  private handleError(error: any, cought: Observable<any>): any {
      let message = "";

      if (error instanceof Response) {
        let errorData = error.json().error || JSON.stringify(error.json());
        message = `${error.status} - ${error.statusText || ''} ${errorData}`
      } else {
        message = error.message ? error.message : error.toString();
      }
      console.error(message);
      return Observable.throw(message);
    }







}

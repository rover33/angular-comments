import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CommentService {
  private comment = {
    author: '',
    text:''
  }
  private comments = [
    {
      author: 'bob', 
      text: 'first comment!'
    },
    {
      author: 'Jin', 
      text: 'nice work!'
    },
    {
      author: 'remy',
      text: 'I would also like to congratulate you!'
    }
  ];
  private subject = new Subject<any>()

  constructor() { }

  

  updateSubject(): any {
    this.subject.next(this.comments)
  }
  
  
  getComments(){
    return this.comments
  }
  
  addComment(){
    this.comments.push(this.comment)
    this.updateSubject();
  }
  
  deleteComment(i){
    this.comments.splice(i, 1)
    this.updateSubject();
  }

  onCommentUpdated(callback){
    this.subject.asObservable().subscribe(callback);
  }

}


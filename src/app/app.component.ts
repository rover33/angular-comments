import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(db: AngularFirestore){
    this.items = db.collection('items').valueChanges();

  }

  }





 
  // postComment(){
  //   let blog = {
  //     author: this.formAuthor,
  //     comment: this.formComment
  //   }
  //   this.comments.push(blog)
  // }

  // deleteBlog(){
  //   let index = this.deleteComment -1;
  //   this.comments.splice(index, 1)
  // }
// }


import { Component, OnInit } from '@angular/core';
import { CommentService } from 'app/comment/comment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private commentService: CommentService
  ) {}

  ngOnInIt(){
    this.commentService.onCommentUpdated(() => {
    })
  }

  // commentToEdit;

  // commentDone = {
  //   author: " ",
  //   text: " "
  // }


  // makeCommentEditable(i){
  //   this.commentToEdit = this.comments[i]
  //   this.commentDone = this.comments[i]
  // }

  // doneEditing(i){
  //   this.comments[i] = this.commentDone
  //   this.commentToEdit = 
  //   {
  //     author: " ",
  //     text: " "
  //   }
  //   console.log(this.comment)

  // }
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


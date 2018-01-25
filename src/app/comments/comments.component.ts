import { Component, OnInit } from '@angular/core';
import { CommentService } from 'app/comment/comment.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {

  commentToEdit: object;

  comments: any [];

  constructor(
    private commentService: CommentService
  ) {}

  ngOnInit(){
    this.comments = this.commentService.getComments()
    console.log(this.comments)

    this.commentService.onCommentUpdated((comments) => {
      this.comments = comments
      this.commentToEdit = this.commentService.commentToEdit;
    })
  }

  makeCommentEditable(comment){
    this.commentService.makeCommentEditable(comment);
  }

  deleteComment(comment, i){
    this.commentService.deleteComment(comment, i);
  }

  doneEditing(){
    this.commentService.doneEditing();
  }
   
}



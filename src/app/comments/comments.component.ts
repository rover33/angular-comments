import { Component, OnInit } from '@angular/core';
import { CommentService } from 'app/comment/comment.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {

  comments: {}[];

  constructor(
    private commentService: CommentService
  ) {}

  ngOnInit(){
    this.comments = this.commentService.getComments()
    console.log(this.comments)
    }
}


import { Component, OnInit } from '@angular/core';
import { CommentService } from 'app/comment/comment.service';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  text: string;
  author: string;
  
  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
  }

  addComment(){ 
    this.commentService.addComment(this.text, this.author)
    }
  }






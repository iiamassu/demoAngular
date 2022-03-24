import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info = {
    nom:"Oussama",
    email:"oussama@akhatar.ma",
    tel:"0606545414"
  }
  comments = [
    {
      id:1,
      message: "Hello World (Defaul Message)"
    }
  ];

  comment = {
    id:0,
    message: ""
  };

  newComment = false;

  noComments=true;

  addComment():void{
    if(this.comment.message != ""){
      this.comment.id = this.comments.length+1;
      this.comments.push({
        id:this.comment.id,
        message:this.comment.message
      });
      this.comment.message="";
    }else{
      alert("Enter Your Comment !");
    }
  }

  deleteMessage(item:any):void{
    this.comments = this.comments.filter(t => t.id !== item.id);
  }

  deleteAllComments():void {
    if(confirm("Are You Really want to Delete All the comments ?")){
      this.comments = [];
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forPractice';
  arr = [
    {
      name: "rushi",
      lname: "hengade",
      email: "rushi@gmail.com",
      socialA: [{first:'Insta', second:'Youtube', third:'Facebook', fourth:'google',fifth:['rushi','kiran']}]
    }
  ]

  color='aqua';
  bcolor='red';
  myfun(){
    this.color='red';
    this.bcolor='aqua';
  }
  fundata(data:NgForm){
    console.log(data)
  }
  display=true;
  onlyfun(){
      this.display=!this.display;
      console.log(this.display);
  }

  list:any=[]
  check(a:string){
    this.list.push({sr:this.list.length,items:a})
  }

  formdata=new FormGroup({
    user: new FormControl(''),
    suse:new FormControl('')
  })
  sign()
 {
  console.log(this.formdata)
 }
}

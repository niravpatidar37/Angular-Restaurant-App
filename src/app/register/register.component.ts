import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from './../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean = false;
  createUser= new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto:RestoService) { }


  ngOnInit(): void {
  }
  regUser(){
    console.log(this.createUser.value);
    this.resto.createUser(this.createUser.value).subscribe((result)=>{
      console.log(result,"data created sucessfull")
    })
    this.alert=true
    this.createUser.reset({})
  }
  closeAlert()
  {
    this.alert=false
  }
}

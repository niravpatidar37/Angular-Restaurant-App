import { Component, OnInit,Input} from '@angular/core';
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert:boolean = false;
  email:string;
  password:string;
 
  constructor(private resto:RestoService, private router:Router) { }

  ngOnInit(): void {
    
    }
    logIn(){
    if(this.email == this.email && this.password == this.password){
      this.router.navigate(['']);
    }
    else{
      alert("Please Enter Valid Details");
    }
    }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { RestoService } from '../resto.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  alert:boolean=false
  editResto=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
  })
  constructor(private router:ActivatedRoute,private resto:RestoService) { }

  ngOnInit() {
    console.warn(this.router.snapshot.params.id)
    this.resto.getcurrentResto(this.router.snapshot.params.id).subscribe((result)=>
      {
        this.editResto=new FormGroup({
          name:new FormControl(result['name']),
          address:new FormControl(result['address']),
        })
      })
  }
  collection()
  {
    console.warn(this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>
    console.warn(result)
    )
    this.alert=true
  }
  closeAlert()
  {
    this.alert=false
  }
}

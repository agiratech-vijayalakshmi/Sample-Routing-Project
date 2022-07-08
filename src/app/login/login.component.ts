import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name='angular';
  myForm!: FormGroup;
// arr: FormArray;

  constructor(private fb:FormBuilder) { }
  
  ngOnInit() {
this.myForm=this.fb.group({
  arr:this.fb.array([this.createItem()])

})
  }
createItem() {
  return this.fb.group({
    username:[''],
    password:['']
  })
}
// addItem() {
//   this.arr = this.myForm.get('arr') as FormArray;
//   this.arr.push(this.createItem());
// }
onSubmit() {
  console.log(this.myForm.value);
}
}

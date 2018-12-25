import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-reactive-form',
  templateUrl: './add-student-reactive-form.component.html',
  styleUrls: ['./add-student-reactive-form.component.css']
})
export class AddStudentReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myForm = new FormGroup({
    txtName : new FormControl(null,Validators.required),
    txtAge: new FormControl(null,[Validators.required,Validators.minLength(2)])
  });

  addNew3()
  {
    console.log(this.myForm);
    //console.log(`Your name: ${this.myForm.value.txtName}  ,Age: ${this.myForm.value.txtAge}`);
  }

  resetForm()
  {
    this.myForm.reset();
    //this.myForm.reset({txtName:"rami"});
  }
}

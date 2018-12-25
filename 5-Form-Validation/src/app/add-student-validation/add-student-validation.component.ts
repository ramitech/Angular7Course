import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student-validation',
  templateUrl: './add-student-validation.component.html',
  styleUrls: ['./add-student-validation.component.css']
})
export class AddStudentValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  errorMsg:string;
  addNew(myForm)
  {
    let txtNameError = myForm.controls.txtName.errors;
    if(txtNameError != null && txtNameError.required)
    {
      this.errorMsg = "please enter name";
    }
    let txtAgeError = myForm.controls.txtAge.errors;
    if(txtAgeError != null && txtAgeError.minlength)
    {
      txtAgeError = txtAgeError.minlength;
      this.errorMsg = `age must be ${txtAgeError.requiredLength}, you enter ${txtAgeError.actualLength}`;
    }

    console.log(myForm);
  }

  addNew2(myForm2)
  {
    
  }
}

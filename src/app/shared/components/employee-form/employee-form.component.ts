import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from './../../../shared/global/employee.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee;
  employeeFrom!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.employee === 'undefined') {
      this.router.navigate(['new']);
    } else {
      this.employeeFrom.patchValue(this.employee);
    }
  }
  onSave() {
    console.log('Submit form', this.employeeFrom.value);
  }
  private initForm(): void {
    this.employeeFrom = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      date: ['', [Validators.required]],
    });
  }
  onGoToBack(): void {
    this.router.navigate(['list']);
  }
}

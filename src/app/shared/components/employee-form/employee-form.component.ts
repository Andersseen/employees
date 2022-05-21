import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private employeesService: EmployeesService
  ) {
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
  async onSave() {
    await this.employeesService.addEmployee(this.employeeFrom.value);
    alert('You create new employee');

    this.router.navigate(['list']);
  }

  async onUpdate(
    employee: Employee,
    name: string,
    email: string,
    date: string
  ) {
    await this.employeesService.modifyName(employee, name);
    await this.employeesService.modifyEmail(employee, email);
    await this.employeesService.modifyDate(employee, date);
    alert('You update employee');
    this.router.navigate(['list']);
  }

  // async setName(employee: Employee, name: string) {
  //   await this.employeesService.modifyName(employee, name);
  // }
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
